import React from 'react'
import newsletter from '../assets/newsletter.png';

function Resources_page_newsletter_page() {
  return (
    <>
      <div className='lg:m-80 md:m-40 m-10'>
        <div className="flex bg-primary lg:p-5 md:p-5 p-3 justify-center items-center rounded">
        <h2 className='lg:text-2xl md:text-2xl text-base font-bold font-serif text-white lg:me-2 md:me-2 me-1'>Download Newsletter</h2>
        <img src={newsletter} alt="" />
        </div>
      </div>
    </>
  )
}

export default Resources_page_newsletter_page
