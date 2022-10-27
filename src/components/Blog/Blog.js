import React, { useEffect, useState } from 'react';
import Post from '../Post/Post';
import './Blog.css';

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() =>{
       fetch('blog.json')
       .then(res => res.json())
       .then(data => setPosts(data))
  },[])

  return (
    <div className="container">
        <h2 className='blog text-center mt-5 pt-5 ps-3'>Blog about Technology</h2>
         <div className="post-container">
            {
               posts.map(post => <Post 
                post={post} 
                key={post.id}
                ></Post> 
                ) 
            }
         </div>
    </div>
  );
};

export default Blog;
