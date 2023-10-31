import React from 'react'
import { Link } from 'react-router-dom'

function Dream_team() {
  return (
    <>
      <div className='text-center pt-12 pr-[5%]  pl-[5%] dark:bg-neutral-200'>
        <h1 className='font-bold font-serif capitalize lg:text-4xl  md:text-4xl text-2xl '>Discover your dream team</h1>
        <p className='text-base md:text-xl font-serif font-normal text-black pt-4 '>At Massie and Company, we understand that in the construction industry, assembling the right team is essential for the success of any project. Just like you carefully handpick the best talent for your construction endeavors, we pride ourselves on being the dream team of construction CPAs that you can rely on. Here's why our specialized expertise and direct approach make us the perfect match for your financial needs:</p>
        <Link to="/discover-your-dream"> <button className='btn p-2 my-5 lg:ml-6 rounded  md:static text-primary border-4 border-primary bg-white dark:bg-neutral-200  dark:border-black dark:hover:text-primary  dark:hover:border-primary dark:text-black hover:bg-primary hover:text-white font-bold'>Learn More</button></Link>
        {/* <button className='text-white bg-primary  dark:bg-black dark:text-white rounded p-3 hover:bg-white hover:border-2 hover:border-primary hover:text-primary font-bold mt-7 w-32'><Link to="/discover-your-dream">Learn More</Link></button> */}
      </div>
    </>
  )
}
export default Dream_team
