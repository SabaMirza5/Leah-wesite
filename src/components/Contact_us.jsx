import React from 'react'
import map from '../assets/map.png';


function Contact_us() {
  return (
    <>
      <div className="contact-us justify-center text-center mt-11">
      <h2 className='font-serif font-bold lg:text-4xl  md:text-4xl text-2xl text-[#1E559B] '>Contact us</h2>
      <p className='font-bold font-serif capitalize text-base pb-6  lg:text-4xl md:text-4xl'>we’d love to hear from you</p>
     <img src={map} alt="" className='w-full justify-center pl-[5%] pr-[5%]'/>
<div className="flex justify-around py-10">
<div className="left">
  <h2 className='text-lg font-serif text-black font-bold py-2'>Inquiries</h2>
  <h2 className='lg:text-base  md:text-base text-sm font-serif font-normal py-2'>Our friendly team is here to help.</h2>
  <h2 className='font-serif font-bold lg:text-base  md:text-base text-sm text-[#1E559B] py-2'>info@massiecpa.com</h2>
</div>
<div className="right">
<h2 className='text-lg font-serif text-black font-bold py-2'>Phone</h2>
<h2 className='font-serif font-bold lg:text-base  md:text-base text-sm text-[#1E559B] py-2'>+1 (360) 687-1562</h2>
  <h2 className='lg:text-base  md:text-base text-sm font-serif font-normal py-2'>Mon-Fri  from  8am to 5pm.</h2>
</div>
</div>
</div>
    </>
  )
}

export default Contact_us
