import React from 'react';
import { useLoaderData, useNavigate, Link} from 'react-router-dom';
import Checkout from '../Checkout/Checkout';
import './CourseDetail.css'

const CourseDetail = () => {

const detail = useLoaderData();
const { id, name, description, picture} = detail;

const navigate = useNavigate(); 
const handleNavigate = () =>{
  navigate(`/detail/${id}`);
}

  return (
    <div className='course-detail container mt-5'>
      <h1> <small className='text-primary'>COURSE:</small> {name}</h1>
      <img className='img-fluid w-75 mt-5' src={picture} alt="" /> <br /><br />
      <p className=' p-4 mx-5 fs-5'>{description}</p>
      <button onClick={ handleNavigate} className='btn btn-primary w-25 mt-4 px-3 py-2 fs-5'> CHECKOUT</button>
    </div>
  );
};

export default CourseDetail;