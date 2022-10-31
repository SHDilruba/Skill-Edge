import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Course = ({course}) => {
   const { id, name, description, price, picture } = course;

   const navigate = useNavigate(); 
   const handleNavigate = () =>{
     navigate(`/course/${id}`);
 }

  return (
    <div onClick={handleNavigate} className='card w-100'>
         <img src={picture} alt="" />
         <h3 className='mt-4 px-1'>{name}</h3>
    </div>
  );
};

export default Course;