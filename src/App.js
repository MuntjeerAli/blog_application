import React, { useState } from 'react';
import "./App.css";
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Home from './pages/Home.js';
import Login from './pages/Login.js';
import CreatePost from './pages/CreatePost.js';
import {signOut} from 'firebase/auth';
import {auth} from './firebase';

const App = () => {
  const [isAuth, setIsAuth] = useState(false);


  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear()
      setIsAuth(false)
      window.location.pathname = "/login";
    })
  }

  return <Router>
    <nav>
      <Link to='/'>Home</Link>
      <Link to='/createpost'>Create Post</Link>
      {!isAuth ? <Link to='/login'>Login</Link> : <button onClick={signUserOut}>Log out</button>}
    </nav>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login setIsAuth={setIsAuth}/>}/>
      <Route path='/createpost' element={<CreatePost/>}/>
    </Routes>
  </Router>
}

export default App

