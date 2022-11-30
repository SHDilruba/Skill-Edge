import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import InputGroup from 'react-bootstrap/InputGroup';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import './Register.css';

const Register = () => { 

  const [error, setError] = useState('');
  const {createUser, updateUserProfile} = useContext(AuthContext);
  const [success, setSuccess] = useState(false);

    const handleSubmit = event =>{
       event.preventDefault(); 
       const form = event.target;
       const firstName = form.firstName.value;
       const lastName = form.lastName.value;
       const name = (firstName + ' ' + lastName);
      const photoURL = form.photoURL.value;
      const email = form.email.value;
      const password = form.password.value;

      
      if(!/(?=.*[A-Z].*[A-Z])/.test(password)){
        setError('please provide at least two uppercase');
          return;
      }
       if(password.length < 6){
        setError('please should be at least 6 characters');
        return;
       }
       if(!/(?=.*[!@#$&*])/.test(password)){
        setError('please add at least one special character');
       return;
       }
       setError('');

    createUser( email, password)
      .then( result => {
        const user = result.user;
        console.log(user);
        setSuccess(true); 
        form.reset();
        handleUpdateUserProfile(name, photoURL);
      })
      .catch(e => {
        console.error(error);
        setError(e.message);
      });

      const handleUpdateUserProfile = (name, photoURL) =>{
        const profile = {
           displayName: name,
           photoURL: photoURL
        }
         updateUserProfile(profile)
         .then(() =>{})
         .catch(error => console.error(error));
     }

    }

  return (
    <div className='register-container mx-auto bg-light px-5 py-5 mt-5 mb-5'>
      <h2 className='text-primary mb-5 mt-3'>Please Register</h2>
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicName">
      <Form.Label> Full Name</Form.Label>
      <InputGroup className="mb-3">
      <Form.Control aria-label="First name" name="firstName" placeholder="First name" />
      <Form.Control aria-label="Last name" name="lastName"  placeholder="Last name"/>
    </InputGroup>
      </Form.Group>

      <Form.Group htmlFor='basic-url' className="mb-3" controlId="formBasicPhotoURL">
        <Form.Label htmlFor='basic-url'>Photo url</Form.Label>
        <Form.Control type="text" name="photoURL" placeholder="Photo  URL"/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name="email" placeholder="Enter email" required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name= "password" placeholder="Password" required />
        </Form.Group>

      <p className='text-danger mt-4'>{error}</p>
      {success && <p className='text-success'>User created sucessfully</p>}
      <Button className='submit-btn my-4' variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    <p className='pt-3 mb-4'><small>Already have an account? Please <Link to='/login'>Log in</Link></small></p>
    </div>
  );
};

export default Register;