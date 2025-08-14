import React from 'react'
import banner from './Banner.png';

function Banner() {
  return (
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 space-x-4 text-3xl flex flex-col md:flex-row my-10' >
      
      <div className='bg-red w-full md:w-1/2
      mt-12 md:mt-32 space-y-12 order-2 md:order-1'>
      <h1 className='text-4xl font-bold '>
        Hello , Welcomes here to learn something <span className='text-pink-500'>new everyday!!!</span>
        </h1>

        <p className='text-xl'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo voluptatibus rerum vel optio vero minus mollitia ipsum doloremque quos! Modi quis sapiente exercitationem quam. Perspiciatis quis tempora voluptas excepturi rerum?
        </p>

        <div className='flex-col  space-y-1      '>
          <label className="input ">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path>
    </g>
  </svg>
  <input type="email" className="grow" placeholder="enter your email" />
  {/* <kbd className="kbd kbd-sm">⌘</kbd>
  <kbd className="kbd kbd-sm">K</kbd> */}
</label>
        </div>
        <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl mt-[-86px] md:mt-[-62px] bg-[oklch(0.4_0.16_355.14)] rounded-t-lg rounded-b-xl">Responsive</button>

        </div>
      <div className='bg-blue w-full md:w-1/2  ml-9 mt-12 md:mt-29 order-1'>
      <img src={banner} className='w-100 h-103' />
      </div>
    </div>
  )
}

export default Banner
