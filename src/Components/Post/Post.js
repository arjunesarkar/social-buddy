import React from 'react';
import { useNavigate } from 'react-router-dom'; 

const Post = (props) => {
    const {id ,userId , title , body } = props.post;
    const navigate = useNavigate();
    const hendelAdd = id => {
        const url = `/post/${id}`;
        navigate(url);
    }
    return (
        <div>
            <h3> <strong> {userId} </strong>{title}</h3>
            <p>{body}</p>
            <p>{id}</p>
            <button onClick={()=> hendelAdd(id)}>show Comments</button>
        </div>
    );
};

export default Post;