import React from 'react'
// import Freebook from './Freebook'
function Cards({ item }) {
    console.log(item);
  return (
    <div className='mt-4 my-3 p-3'>
      
<div className="card bg-base-500 w-90 shadow-x1 hover:scale-105 duration-500">
  <figure>
    <img
     className='ml-0' src={item.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      Card Title
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>{item.title}</p>   
    <div className="card-actions justify-centre  ">
      <div className="badge badge-outline px-5 py-3 rounded-full hover:bg-secondary duration-200">Buy</div>
      <div className="badge badge-outline rounded-full">${item.price}</div>
    </div>
  </div>
</div>


    </div>
  )
}

export default Cards
