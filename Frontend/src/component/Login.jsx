import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"
function Login() {
   const {
    register,
    handleSubmit,
  
    formState: { errors },
  } = useForm ()
  const onSubmit =  (data) => console.log(data)
  return (
    <div>
      <form  onSubmit={handleSubmit(onSubmit)}>
      <dialog id="my_modal_1" className="modal ">
  <div className="modal-box bg-white text-black">
    <h3 className="font-bold text-lg  text-pink-500">Login!</h3>
    <p className="py-1 text-lg bg-grey pt-6">Enter your name</p>
   <div> <input className='text-gray-500 text-lg border rounded mb-5 bg-pink-200 w-59 md:w-96' type="text" name="" id=""  placeholder='Enter your Name ' {...register("Name", { required: true })}/>
     {errors.name && <span className='text-sm'>This field is required</span>}
     </div>

      <p className="py-1 text-lg pt-6">Enter your email</p>
    <div><input className='text-gray-500 text-lg border  bg-pink-200  rounded w-59 md:w-96'type="email" name="" id=""  placeholder='Enter your Email'  {...register("email", { required: true })}/>
    <br/>
     {errors.email && <span className='text-sm  text-red-500'>This field is required</span>}</div>

    <div className=' text-lg flex justify-around'>
      <button className='bg-pink-500 text-white rounded-md   px-1 py-1 md:px-3 py-1 mt-6'>Login</button>
     <p className=''>
      Not registered? <span><a className='cursor-pointer underline'><Link to={'/Signup_Page'}>Signup</Link></a></span>
     </p>
    </div>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
</form>
    </div>
  )
}

export default Login
