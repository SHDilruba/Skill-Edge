import app from '../../firebase/firebase.config';
import { getAuth, sendPasswordResetEmail, signInWithEmailAndPassword  } from 'firebase/auth';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';

const auth = getAuth(app);

const Login = () => {
  const [success, setSuccess] = useState(false);
  const [userEmail, setUserEmail] = useState('');

  const handleSubmit = event =>{
     event.preventDefault();
     setSuccess(false);  
     const form = event.target;
     const email = form.email.value;
     const password = form.password.value;

     signInWithEmailAndPassword(auth, email, password)
     .then (result => {
        const user = result.user;
        console.log(user);
        setSuccess(true); 
     })
     .catch(error =>{
         console.error('error', error)
     })   
  }

const handleEmailBlur = event =>{
    const email = event.target.value;
    setUserEmail(email);
    console.log(email);
}

const handleForgetPassword = () =>{
  if(!userEmail){
     alert('please enter your email address')
     return;
  } 
    sendPasswordResetEmail(auth, userEmail)
    .then( () => {
      alert('Password Reset email set, please check your email ')
    })
    .catch( error =>{
       console.error(error);
    })
}
  return (
    <div className='container mt-5 w-50 pb-5'>
      <h3 className='text-primary'> Login with Email</h3>
          <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="formGroupExampleInput" className="form-label">Email</label>
                <input onBlur={handleEmailBlur} type="email" name="email" className="form-control" id="formGroupExampleInput" placeholder="Your email" required/>
            </div>
            <div className="mb-3">
                <label htmlFor="formGroupExampleInput2" className="form-label">Password</label>
                <input type="password" name="password" className="form-control" id="formGroupExampleInput2" placeholder="Your password" required />
            </div>
            <button className="btn btn-primary w-25 mb-5" type="submit">Login</button>
        </form>
        {success && <p>Succesfully login to the account</p>}
        <p><small>New to this website? Please <Link to='/register'>Register</Link></small></p>
        <p><small>Forget password? <button onClick={handleForgetPassword} type="button" className="btn btn-link">Reset Password</button></small> </p>
    </div>
  );
};

export default Login;