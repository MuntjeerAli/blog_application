import React, { useEffect, useState } from 'react';
import "./App.css";
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Home from './pages/Home.js';
import Login from './pages/Login.js';
import CreatePost from './pages/CreatePost.js';
import {signOut} from 'firebase/auth';
import {auth} from './firebase';

const App = () => {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

  const [theme, setTheme] = useState();

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };
  useEffect (() => {
    document.body.className = theme;
  }, [theme]);

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear()
      setIsAuth(false)
      window.location.pathname = "/login";
    })
  }

  return <Router>
    <nav>
      <div className='vl'></div>
      <Link to='/'>Home</Link>
      <div className='vl'></div>
      {!isAuth ? (<Link to='/login'>Login</Link>) : (
        <>
          <Link to='/createpost'>Create Post</Link>
          <div className='vl'></div>
          <button onClick={signUserOut} className='logOutBtn'>Log out</button>
        </>
      )}
      <div className='vl'></div>
      <button onClick={toggleTheme} className='toggleBtn'>Toggle</button>
      <div className='vl'></div>
    </nav>
    <Routes>
      <Route path='/' element={<Home isAuth={isAuth}/>}/>
      <Route path='/login' element={<Login setIsAuth={setIsAuth}/>}/>
      <Route path='/createpost' element={<CreatePost isAuth={isAuth}/>}/>
    </Routes>
  </Router>
}

export default App

