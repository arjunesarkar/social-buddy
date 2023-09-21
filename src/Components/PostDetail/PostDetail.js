import React, { useEffect ,useState } from 'react';
import { useParams } from 'react-router-dom';
const PostDetail = () => {
    const {id} = useParams();
    const [post ,setPost] =useState({});
    useEffect(()=>{
        const url = `https://jsonplaceholder.typicode.com/posts/${id}`
        fetch(url)
        .then(res => res.json())
        .then(data => setPost(data))
        .catch(error => console.log(error))
    } , [])
    return (
        <div>
            <h1>This is postDetail component : {id}</h1>
            <p>Id :{post.id}</p>
            <p>Body :{post.body}</p>
            <p>Title :{post.title}</p>
        </div>
    );
};

export default PostDetail;