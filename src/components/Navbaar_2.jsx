import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import { FaTimes, FaAlignJustify } from 'react-icons/fa';

const Navbaar_2 = () => {
    let Links =[
        {name:"Home",link:"/"},
        {name:"About",link:"/about"},
        {name:"Services",link:"/services"},
        {name:"Resources",link:"/resources"},
        {name:"Contact",link:"/contact"},
        {name:"Terms",link:"/terms"},
        {name:"Policy",link:"/policy"},
        {name:"Job",link:"/job"},
      ]; 
      let [open, setOpen] =useState(false);

    return (
        <div className='shadow-md w-full sticky top-0 left-0 z-50'>
           <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
            <img src={logo} alt="image here" className='md:w-60  md:h-20 rounded-2xl px-4 py-2 w-48 h-16  ' />
            <div onClick={()=>setOpen(!open)} className='absolute right-8 top-6 cursor-pointer xl:hidden w-7 h-7'>
                {
                  
                    open ? <FaTimes/> : <FaAlignJustify />
                }
            </div>
            <ul className={`xl:flex xl:pb-0 pb-12 absolute xl:static bg-white xl:z-auto z-[-1] left-0 w-full  items-center xl:w-auto xl:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 md:top-[7rem]' : 'top-[-490px] md:top[-550px]'}`}>
                {
                    Links.map((link, index) => (
                    <li className='md:ml-8 md:my-0 my-5 font-semibold' key={index} >
                        {/* <a href={link.link} className='text-gray-800 hover:text-[#1E559B] duration-500'>{link.name}</a> */}
                        <Link to={link.link} className='text-gray-800 hover:text-[#1E559B] duration-500'>{link.name}</Link>

                    </li>))
                }
               <Link to="/"><button className='btn md:ml-8 px-3 py-1 rounded  md:static    text-[#1E559B]  border-4 border-[#1E559B] bg-white hover:bg-[#1E559B]  hover:text-white font-bold xl:mt-0 mt-4'>Submit RFP</button></Link>
               <Link to="/client-portal-page"><button className='btn md:ml-8 px-3 py-1 rounded  md:static text-white  border-4 border-[#1E559B] bg-[#1E559B] hover:bg-[#1E559B]  hover:text-white font-bold block xl:mt-0 mt-4'>Client Portal</button></Link>
            </ul>
           </div>
        </div>
    );
};

export default Navbaar_2;