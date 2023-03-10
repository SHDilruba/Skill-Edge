import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Course = ({course}) => {
   const { id, name, description, price, picture } = course;

   const navigate = useNavigate(); 
   const handleNavigate = () =>{
     navigate(`/course/${id}`);
 }

  return (
    <div className='card w-100'>
         <img className='img-fluid' src={picture} alt="" />
         <h5 className='mt-4 px-1'>{name}</h5>
         <button onClick={handleNavigate} className='btn btn-primary my-4'>Details</button>
    </div>
  );
};

export default Course;