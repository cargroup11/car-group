import React from 'react'
import {Route, Routes, } from 'react-router-dom';
import About from './About';
import CreatePost from './CreatePost';
import Layout from './Layout';
import Profile from './Profile';

export default function Home() {
  return (
    <div> 
      <Routes>
        <Route path='/' element={<Layout />}> 
          <Route path='/about' element={<About />}> about </Route>
          <Route path='/createpost' element={<CreatePost />} > createPost </Route>
          <Route path='/profile' element={<Profile />} > profile </Route>
          </Route>
      </Routes>
<h1> Home</h1>     
    </div>
  )
} 
 