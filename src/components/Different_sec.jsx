import React from 'react'
import difference_img from '../assets/difference_img.png';
import { Link } from 'react-router-dom';

function Different_sec() {
  return (
    <>
    <div className='flex mt-16 flex-col sm:flex-row'>
      <div className="basis-2/4">
        <img src={difference_img} alt="" className='w-full' />
      </div>
      <div className="basis-2/4 pr-[5%]  pl-[5%] flex flex-col">
      <h2 className='font-bold font-serif capitalize text-2xl md:text-4xl md:mt-0 mt-5'>Why We're Different</h2>
        <ul className="max-w-md space-y-1 list-disc list-inside  lg:text-lg md:text-lg text-base  font-serif font-normal text-black pt-4 ">
          <li>Specialization in Construction</li> 
          <li>Direct and To-the-Point Approach</li> 
          <li>Honesty as Our Foundation</li> 
          <li>Industry Insights that Empower You</li> 
          <li>Collaborative Partnership</li> 
          <li>Emphasis on Innovation</li> 
       </ul>
       {/* <button className='btn  px-3 py-1 mt-7 rounded  md:static text-white  border-4 border-[#1E559B] bg-[#1E559B] hover:bg-[#1E559B]  hover:text-white font-bold block xl:mt-0 w-48'>Learn More</button> */}
        <button className='text-white bg-[#1E559B] rounded p-3 hover:bg-white hover:border-2 hover:border-[#1E559B] hover:text-[#1E559B] font-bold mt-7 w-32'><Link to="/why-we-different-page">Learn More</Link></button>
      </div>
    </div>
    </>
  )
}

export default Different_sec
