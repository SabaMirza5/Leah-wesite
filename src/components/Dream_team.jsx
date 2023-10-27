import React from 'react'
import { Link } from 'react-router-dom'

function Dream_team() {
  return (
    <>
      <div className='text-center mt-12 pr-[5%]  pl-[5%]'>
        <h1 className='font-bold font-serif capitalize lg:text-4xl  md:text-4xl text-2xl'>Discover your dream team</h1>
        <p className='text-base md:text-xl font-serif font-normal text-black pt-4 '>At Massie and Company, we understand that in the construction industry, assembling the right team is essential for the success of any project. Just like you carefully handpick the best talent for your construction endeavors, we pride ourselves on being the dream team of construction CPAs that you can rely on. Here's why our specialized expertise and direct approach make us the perfect match for your financial needs:</p>
        <button className='text-white bg-[#1E559B] rounded p-3 hover:bg-white hover:border-2 hover:border-[#1E559B] hover:text-[#1E559B] font-bold mt-7 w-32'><Link to="/discover-your-dream">Learn More</Link></button>
      </div>
    </>
  )
}
export default Dream_team
