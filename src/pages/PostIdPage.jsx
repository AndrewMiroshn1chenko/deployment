import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Loader from "../Components/UI/Loader/Loader";
import { useFetching } from "../Hooks/useFetching";
import PostService from './../API/PostService';
import Posts from "./Posts";


    const PostIdPage = () => {

        const params = useParams()
        const [post, setPost] = useState({});
        const [comments, setComments] = useState([]);
        const [fetchPostsById, isLoading, error] = useFetching( async (id) => {
            const response = await PostService.getById(params.id)
            setPost(response.data);
        })

        const [fetchComments, isComLoading, comError] = useFetching( async () => {
            const response = await PostService.getCommentsById(params.id)
            setComments(response.data);
        })
        
        useEffect( () => {
            fetchPostsById(params.id)
            fetchComments(params.id)
        }, [])
    return(
        <div>
            <h1>ID : {params.id}</h1>

            {isLoading
            ? <Loader/>
            :   <div>
                    <h1>Post with ID : {post.id}</h1>
                    <h3>Title <br/>{post.title}</h3>
                    <h5>Body <br/>{post.body}</h5>
                </div>
            }
            <h1>
                Comments:
            </h1>
            {isComLoading
            ? <Loader/>
            :   <h4>{comments.map(comm => 
                    <div style={{marginTop: 10}}>
                        <h5>
                            {comm.email}
                        </h5>
                        <div>
                            {comm.body}   
                        </div>
                    </div>
                )}
                </h4>
            }
        </div>
    );
};

export default PostIdPage;