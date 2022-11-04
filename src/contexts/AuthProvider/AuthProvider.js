import React, { useState } from 'react';
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useEffect } from 'react';
import { createContext } from 'react';
import app from '../../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

  const providerLogin =(provider) =>{
    setLoading(true);
    return signInWithPopup(auth, provider);
  }

  const createUser = (email, password) =>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  }

  const updateUserProfile = (profile)=>{
    return updateProfile(auth.currentUser, profile);
  }

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  }
  
  useEffect( () =>{
    const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
      if(currentUser === null || currentUser.emailVerified){

         setUser(currentUser);
      }
         setLoading(false);
    })
    return () => {
      unsubscribe();
    }

  },[]);

 const authInfo = { 
  user, 
  loading,
  providerLogin, 
  logOut, 
  updateUserProfile,
  createUser, 
  signIn }

  return (
    <div>
      <AuthContext.Provider value={authInfo}>
           {children}
      </AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;