import React from 'react';
import {auth, provider} from '../firebase';
import {signInWithPopup} from "firebase/auth";
import { useNavigate } from 'react-router-dom';


function Login({setIsAuth}) {
  let navigate = useNavigate();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      navigate("/");
    })
  }


  return (
    <div className='loginPage'>
      <p>Sign in with Google to continue</p>
      <button className='googleBtn' onClick={signInWithGoogle}>
        Sign In With Google
      </button>
    </div>
  )
}

export default Login
