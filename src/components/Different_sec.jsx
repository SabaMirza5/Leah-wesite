import React from 'react'
import difference_img from '../assets/difference_img.png';
import { Link } from 'react-router-dom';

function Different_sec() {
  return (
    <>
    <div className='flex pt-16 flex-col sm:flex-row dark:bg-neutral-200'>
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
       <Link to="/why-we-different-page" className='mt-4'> <button className='btn p-2 lg:ml-6 rounded  md:static text-primary border-4 border-primary bg-white dark:bg-neutral-200  dark:border-black dark:hover:text-primary  dark:hover:border-primary dark:text-black hover:bg-primary hover:text-white font-bold'>Learn More</button></Link>
       {/* <Link to="/why-we-different-page">
        <button className='text-white bg-primary rounded p-3 hover:bg-white hover:border-2 hover:border-primary hover:text-primary font-bold mt-7 w-32 dark:bg-black dark:text-white'>Learn More</button></Link> */}
      </div>
    </div>
    </>
  )
}

export default Different_sec
