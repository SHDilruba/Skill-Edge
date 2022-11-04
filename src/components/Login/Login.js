import React, { useState } from 'react'
import { sendPasswordResetEmail, signIn, GoogleAuthProvider, signInWithPopup, GithubAuthProvider, getAuth} from 'firebase/auth';
import { Link, navigate, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import app from '../../firebase/firebase.config';

const auth = getAuth(app);

const Login = () => {
  const [error, setError] = useState('');
  const { signIn} = useContext(AuthContext);
  const navigate = useNavigate();

  const  provider = new GoogleAuthProvider(); 
  const [user, setUser] = useState({});
  const [success, setSuccess] = useState(false);
  const [userEmail, setUserEmail] = useState('');


  const handleSubmit = event =>{
     event.preventDefault();
     setSuccess(false);  
     const form = event.target;
     const email = form.email.value;
     const password = form.password.value;
     
     signIn(email, password) 
     .then (result => {
        const user = result.user;
        console.log(user);
        setUser(user);
        form.reset();
        setError('');
        setSuccess(true); 
        navigate('/detail/:detailId');
     })
     .catch(error =>{
         console.error('error', error)
         setError('Please enter a valid email and password');
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
      alert('Password Reset email send, please check your email ')
    })
    .catch( error =>{
       console.error(error);
    })
}
     const {providerLogin} = useContext(AuthContext);
      const googleProvider = new GoogleAuthProvider()
     
       const handleGoogleSignIn = () =>{
         providerLogin(googleProvider)
          .then(result => {
           const user = result.user; 
            console.log(user);
            setUser(user);
            setError('');
            setSuccess(true); 
            setUser(user);
            navigate('/detail/:detailId');
          })
          .catch(error => {
           console.error('error', error)
          })
          }

const githubProvider = new GithubAuthProvider(); 
 const handleGithubSignIn = () =>{
    providerLogin(githubProvider) 
    .then(result => {
        const user = result.user;
        console.log(user);
        setUser(user);
        setError('');
        setSuccess(true); 
        navigate('/detail/:detailId');
      })
      .catch(error => {
        console.error(error)
      })
     }

  return (
    <div className='container'>             
    <div className='container bg-light rounded p-5 my-5 w-50 pb-5'>
      <h3 className='text-primary mb-5'> Log in with Email</h3>
          <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="formGroupExampleInput" className="form-label">Email</label>
                <input onBlur={handleEmailBlur} type="email" name="email" className="form-control" id="formGroupExampleInput" placeholder="Your email" required/>
            </div>
            <div className="mb-3">
                <label htmlFor="formGroupExampleInput2" className="form-label">Password</label>
                <input type="password" name="password" className="form-control" id="formGroupExampleInput2" placeholder="Your password" required />
             <div className='text-danger'>{error}</div>
            </div>
            <button className="btn btn-primary w-50 mt-3" type="submit">Login</button>
        </form> 
               {success && alert('Succesfully loged in to the account')}
          <div className='mt-5'>
              <button className='w-50 py-2 btn btn-dark' onClick={handleGoogleSignIn}>Log In with Google</button> <br /><br />
              <button className='w-50 py-2 btn btn-dark mb-5' onClick={handleGithubSignIn}> Log In with Github</button> 
        </div>
        <p><small>New to this website? Please <Link to='/register'>Register</Link></small></p>
        <p><small>Forget password? <button onClick={handleForgetPassword} type="button" className="btn btn-link">Reset Password</button></small> </p>
    </div>
    {/* }; */}
  </div>
  );
};

export default Login;