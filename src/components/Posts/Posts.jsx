import React from 'react';
import "./Posts.css";
import { PostsData } from "../../Data/Posts.js";
import Post from '../Post/Post';
const Posts = () => {
    return (
        <div className='Posts'>
            {PostsData.map((post , id) => <Post post={post} key={id} />)}
        </div>
    );
};

export default Posts;