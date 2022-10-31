import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './Checkout.css'

const Checkout = () => {
 const checkout = useLoaderData();
const { name, price} = checkout;
  console.log(checkout);

  return (
    <div className='container card-checkout card bg-primary '>
         <div className=' checkout-card container card w-75  mt-5'>
         <h4 className='text-primary pb-1 pt-3'>Course Name:</h4>
      <h3 className=' pb-1'>{name}</h3>
       <h2 className='text-primary pb-3'> Price: {price}</h2>
       <button className='btn btn-primary '>Buy Now</button>
         </div>
    </div>
  );
};

export default Checkout;