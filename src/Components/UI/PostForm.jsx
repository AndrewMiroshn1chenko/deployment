import React, {useState} from "react"
import MyInput from './Input/MyInput';
import MyButton from './Button/MyButton';

const PostForm = ({create}) => {

    const [post, setPost] = useState({title: '', body: ''})

    const addNewPost = (e) => {
        e.preventDefault()

        const newPost = {
            ...post, id: Date.now() 
        }
        create(newPost)
        setPost({title: '', body: ''})
    
    }
    return(
        <form>
      <MyInput 
          value={post.title}
          onChange={e => setPost({...post, title: e.target.value})}
          type="text" 
          placeholder="Enter the name of the post">
      </MyInput>
 
      <MyInput 
          value={post.body}
          onChange={e => setPost({...post, body: e.target.value})}
          type="text" 
          placeholder="Enter the discription of the post"
          >
      </MyInput>

      <MyButton onClick = {addNewPost}>Create</MyButton>
    </form>
    );
};

export default PostForm;