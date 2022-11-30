import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import './Checkout.css'
import Button from 'react-bootstrap/Button';

const Checkout = () => {
 const checkout = useLoaderData();
const { name, price, picture} = checkout;
  console.log(checkout);

  const { user } = useContext(AuthContext);

  return (
    <div className='container checkout-container card bg-primary '>
         <h3 className='text-light'>{user.displayName}</h3>
         <p className='text-light'>{user.email}</p>
         <div className='checkout-card container card'>
         <h5 className='text-primary pb-1 pt-2'>Course Name:</h5>
      <h3 className=''>{name}</h3>
       <h2 className='text-primary pb-5'> Price: {price}</h2>
       <Button className='mb-3' variant="primary" size="lg" active>Buy Now</Button>
         </div>
    </div>
  );
};

export default Checkout;