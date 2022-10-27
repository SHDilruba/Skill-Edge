import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../images/cover.png'
import './Home.css'

const Home = () => {
  return (
    <div className='cover container bg-light py-5'>
      <img src={img1} alt="" />
        <div className='card text-center'>
           <p>It is evident that technology is advancing and this also  shows where the future of work will be. <br /> <br />
            Are you ready to take your learning to next level? Do you want to grow your skills, and highlight them on your resume?
            <br />
            <br />
            You can visit our popular courses... 
            <Link to={'/courses'} >Visit</Link>
          </p>
        </div>
    </div>
  );
};

export default Home;