import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'
import { useForm } from "react-hook-form"


function Signup() {
  const {
      register,
      handleSubmit,
    
      formState: { errors },
    } = useForm ()
    const onSubmit =  (data) => console.log(data)
  return (
    <div className='flex bg-white h-screen items-center justify-center'>
        <form onSubmit={handleSubmit(onSubmit)}>  
          <  div id='my_modal_3' className=''>
  <div className=" bg-white text-black border-1 p-5">
    <h3 className="font-bold text-lg  text-pink-500">Signup!</h3>
    <p className="py-1 text-lg bg-grey pt-6">Enter your name</p>
    <input className='text-gray-500 text-lg border rounded mb-5 bg-pink-200 w-59 md:w-96' type="text" name="" id=""  placeholder='Enter your Name '/>

      <p className=" text-lg pt-2">Enter your email</p>
  <div>  <input className='text-gray-500 text-lg border  bg-pink-200  rounded w-59 md:w-96'type="email" name="" id=""  placeholder='Enter your Email'  {...register("email", { required: true })}/>
  <br/>
       {errors.email && <span className='text-sm  text-red-500'>This field is required</span>}
  </div>
    <div className=' text-lg flex justify-around'>
      <button className='bg-pink-500 text-white rounded-md mt-3  px-1 py-1 md:px-3 py-1 '>Login</button>
      
     <p className='mt-3'>
      Have Account? 
      <button className='cursor-pointer underline'
      onClick={()=>
        document.getElementById("my_modal_3").showModal()
      }
      > 
      Login

      </button>{" "}
      <Login/>
     </p>
    </div>
   
       <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn"> <Link to={'/'}>Close</Link></button>
      </form>
    </div>
     
  </div>
</ div>
</form>
    </div>
  )
}

export default Signup
