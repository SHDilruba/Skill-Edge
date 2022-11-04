import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import './Checkout.css'

const Checkout = () => {
 const checkout = useLoaderData();
const { name, price} = checkout;
  console.log(checkout);

  const { user } = useContext(AuthContext);

  return (
    <div className='container card-checkout card bg-primary '>
         <h3 className='text-light'>{user.displayName}</h3>
         <p className='text-light'>{user.email}</p>
         <div className=' checkout-card container card w-75'>
         <h5 className='text-primary pb-1 pt-2'>Course Name:</h5>
      <h3 className=' pb-1'>{name}</h3>
       <h2 className='text-primary pb-4'> Price: {price}</h2>
       <button className='btn btn-primary mb-3 ms-2'>Buy Now</button>
         </div>
    </div>
  );
};

export default Checkout;