import React, { useEffect, useState } from 'react';
import PostList from '../Components/PostList';
import PostForm from '../Components/UI/PostForm';
import PostFilter from '../Components/PostFilter';
import MyModal from '../Components/UI/Modal/MyModal';
import MyButton from '../Components/UI/Button/MyButton';
import { usePosts } from '../Hooks/usePosts';
import PostService from '../API/PostService';
import Loader from '../Components/UI/Loader/Loader';
import { useFetching } from '../Hooks/useFetching';
import pages, { getPageCount, getPagesArray } from '../Utils/page'
import Pagination from '../Components/UI/Pagination/Pagination';

function Posts() {

  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({sort: '', query: ''})
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const [totalPage, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);

  const [fetchPosts, isPostsLoading, postError] =  useFetching( async () => {
    const response = await PostService.getAll(limit, page);
    setPosts(response.data)
    const totalCount = response.headers['x-total-count'];
    setTotalPages(getPageCount(totalCount, limit));
  })

  const changePage = (page) => {
    setPage(page)
  }
  
  const createPost = (newPost) => {
      setPosts([...posts, newPost])
      setModal(false)
  }

  
  useEffect(() => {
    fetchPosts()
  }, [page])

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">
    <MyButton style={{marginTop: 30}} onClick={() => setModal(true)}>
      Create post
    </MyButton>
    <MyModal visible = {modal} setVisible={setModal}>
      <PostForm create={createPost}/>
    </MyModal>
      <hr style = {{margin: '15px 0'}}/>
      <PostFilter 
        filter = {filter} 
        setFilter = {setFilter} 
        />
        {postError &&
          <h1>Error ${postError}</h1>
        }
        
      {isPostsLoading
      ? <div style={{display: 'flex', justifyContent: 'center', marginTop: 30}}><Loader/></div>
      : <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Such a big ass"/>
      }
      <Pagination totalPages={totalPage} changePage={changePage} page={page}/>
    </div>
  );
}

export default Posts;
