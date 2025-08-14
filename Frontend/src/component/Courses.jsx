import React from 'react'
import list from '../../public/list.json'
import Cards from './Cards'
// import Link from 'react-router-dom'
import { Link } from 'react-router-dom'

function Courses() {
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 '>

       <div className='mt-29 md:mt-43 justify-center items-center text-center'>
        <h1 className=' text-2xl md:text-4xl'>We are delighted to have you ("  ") 
          <span className='text-pink-500'>HERE</span>
        </h1>

        <p className='mt-15'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur suscipit incidunt unde quasi. Aliquam beatae dolor explicabo, modi saepe praesentium aspernatur sunt quod hic, corporis, neque natus repudiandae ut exercitationem.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla cumque in reiciendis magnam et quo eligendi eius maxime laboriosam. Explicabo quidem nostrum tempore id ducimus dicta possimus animi? Magni, consequatur!
        </p>
        <button className='bg-pink-500 px-3 py-2 rounded-2xl mt-6 hover:bg-pink-800 duration-400'>
        <Link to={'/'}>  Back</Link> 
        
        </button>
       </div>
     
     <div className='grid grid-cols-1  md:grid-cols-4 mt-12'>
      {list.map((item)=>(
        <Cards item={item} key={item.id}/>
       ))}
     </div>
    </div>
    </>
  )
}

export default Courses
