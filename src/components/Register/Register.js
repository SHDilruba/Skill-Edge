import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, updateProfile } from 'firebase/auth';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import app from '../../firebase/firebase.config';
import { Link } from 'react-router-dom';

 const auth = getAuth(app); 

const Register = () => { 
    const [passwordError, setPasswordError] = useState('');
     const [success, setSuccess] = useState(false);

    const handleRegister = event =>{
       event.preventDefault(); 
       const form = event.target;
       const name = form.name.value;
      const email = form.email.value;
      const password = form.password.value;

      if(!/(?=.*[A-Z].*[A-Z])/.test(password)){
          setPasswordError('please provide at least two uppercase');
          return;
      }
       if(password.length < 6){
        setPasswordError('please should be at least 6 characters');
        return;
       }
       if(!/(?=.*[!@#$&*])/.test(password)){
       setPasswordError('please add at least one special character');
       return;
       }
       setPasswordError('');

       createUserWithEmailAndPassword(auth, email, password)
       .then(result =>{
           const user = result.user;
           console.log(user);
           setSuccess(true);
           form.reset();
           verifyEmail(); 
           updateUserName(name);   
       })
       .catch(error => {
        console.log('error', error);
        setPasswordError(error.message)
       })
    }
  const verifyEmail = () =>{
      sendEmailVerification(auth.currentUser)
      .then( () =>{
        alert ('Please check your email and verify your email address')
      })
  }

const updateUserName = (name) =>{
    updateProfile(auth.currentUser, {
        displayName: name
    })
    .then( () => {
      console.log('display name updated ')
    })
    .catch(error => console.error(error))
}

  return (
    <div className='w-50 mx-auto'>
      <h3 className='text-primary'>Please Register</h3>
    <Form onSubmit={handleRegister}>

      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Your Full Name</Form.Label>
        <Form.Control type="text" name="name" placeholder="Enter your full Name"/>   
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicImage">
        <Form.Label>Image url</Form.Label>
        <Form.Control type="url" name="img" placeholder="Enter your image url"/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name="email" placeholder="Enter your email address" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name= "password" placeholder="Password" required />
        </Form.Group>

      <p className='text-danger'>{passwordError}</p>
      {success && <p className='text-success'>User created sucessfully</p>}
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    <p className='pt-3'><small>Already have an account? Please <Link to='/login'>Log in</Link></small></p>
    </div>
  );
};

export default Register;