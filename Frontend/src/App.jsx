import React from 'react'

import Home from './component/Home'

import { Routes, Route } from 'react-router-dom';
import Cou from './component/Cou';
import Signup from './component/Signup';
import Login from './component/Login';


function App() {
  return (
<>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path = '/Courses'  element ={<Cou/>}/>
  <Route path='/Signup_Page' element={< Signup/>}/>
  <Route path='/Login' element={<Login/>}/>

</Routes>

</>
  )
}

export default App
