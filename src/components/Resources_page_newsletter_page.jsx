import React from 'react'
import newsletter from '../assets/newsletter.png';

function Resources_page_newsletter_page() {
  return (
    <>
      <div className='lg:p-80 md:p-40 p-10 dark:bg-neutral-200'>
        <div className=" dark:border-2 dark:border-black flex bg-primary lg:p-5 md:p-5 p-3 justify-center items-center rounded dark:bg-neutral-300">
        <h2 className='lg:text-2xl md:text-2xl text-base font-bold font-serif text-white lg:me-2 md:me-2 me-1 dark:text-black'>Download Newsletter</h2>
        <img src={newsletter} alt="" className="dark:bg-black" />
        </div>
      </div>
    </>
  )
}

export default Resources_page_newsletter_page
