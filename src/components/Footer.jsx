import React from 'react'
import footerbg from '../assets/footerbg.png';
import logo from '../assets/logo.png';
import linkedin from '../assets/linkedin.png';
import google from '../assets/google.png';
import mail from '../assets/mail.png';
import { Link } from 'react-router-dom';
// import Blogs_main_page from '../pages/Blogs_main_page';



function Footer() {
  return (
    <>
      <div className="p-9 grid lg:grid-cols-4 md:grid-cols-4  gap-11 bg-cover bg-no-repeat h-4/5" style={{background:`url(${footerbg})`}}> 
      <div className="">
        <img src={logo} alt="" />
        <p className='text-sm font-serif font-normal pt-5'>Guided by Integrity, Driven by Excellence</p>
        <div className="flex mt-5">
       <img src={linkedin} alt="" className='me-3' />
      <img src={google} alt="" className='me-3' />
       <img src={mail} alt="" />
        </div>
      </div>
      <div className="">
        <h1 className='font-serif font-bold text-xl text-primary dark:text-black'>Links</h1>
        <ul className='text-sm font-serif font-normal'>
          <li className='mt-3'><Link to="/">Home</Link></li>
          <li className='mt-3'><Link to="/about">About Us</Link></li>
          <li className='mt-3'><Link to="/services">Services</Link></li>
          <li className='mt-3'><Link to="/resources">Resources</Link></li>
          <li className='mt-3'><Link to="/contact">Contact</Link></li>
          <li className='mt-3'><Link to="/advisory">Advisory</Link></li>

        </ul>
      </div>
      <div className="">
        <h1 className='font-serif font-bold text-xl text-primary dark:text-black'>Links</h1>
        <ul className='text-sm font-serif font-normal'>
          <li className='mt-3'><Link to="/blogs">Blogs</Link></li>
          <li className='mt-3'><Link to="/mission-and-values">Mission</Link></li>
          <li className='mt-3'><Link to="/leadership">Leadership</Link></li>
          <li className='mt-3'><Link to="/affiliation">Affiliation</Link></li>
          <li className='mt-3'><Link to="/review">Review</Link></li>
          <li className='mt-3'><Link to="/lifecycle">Lifecycle</Link></li>
          <li className='mt-3'><Link to="/ourclientpage">Our Client</Link></li>
        </ul>
      </div>
      <div className="">
        <h2 className='font-serif font-bold text-xl text-primary dark:text-black'>CONTACT US</h2>
        <p className='mt-3'>Phone:<span className='font-sm'>1-800-997-5085 (Toll-free)</span></p>
        <p className='mt-3'>Phone:<span className='font-sm'>+1 (360) 687-1562 (Local)</span></p>
        <p className='mt-3'>Email:<span className='font-sm'>info@massi.com</span></p>
        <p className='font-sm mt-3'>Mon - Fri / 8:00AM - 5:00PM (PT)</p>
      </div>
      </div>
    
    </>
  )
}

export default Footer
