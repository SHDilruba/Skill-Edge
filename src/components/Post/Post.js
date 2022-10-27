import React from 'react';
import './Post.css'

const Post = (props) => {
  const { name, description} = props.post;

  return (
    <div>
       <div className="card-box container">
  <div className="box bg-light">
    <div className="body">
      <h4 className="card-title mb-2">{name}</h4>
      <p className="card-text">{description}</p>
    </div>
   </div>
 </div>
</div>
  );
};

export default Post;