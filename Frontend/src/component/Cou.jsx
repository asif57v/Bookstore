import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Courses from './Courses'
import list from '../../public/list.json'
function Cou() {
  // console.log(list)
  return (

    <div>

      <Navbar/>
       <div className='min-h-screen'>

        <Courses/>

       </div>
       
         
      <Footer/> 
    </div>
  )
}

export default Cou
