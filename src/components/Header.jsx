// import React from 'react'
import videobtn from '../assets/videobtn.svg';
import headerimg from '../assets/headerimg.png';
import aicpa from '../assets/aicpa.png';
import uca from '../assets/uca.png';
import biaw from '../assets/biaw.png';
import swca from '../assets/swca.png';
import cfma from '../assets/cfma.png';
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Model from "../components/Model"



function Header() {
  return (
    <>
  
    <div className=" flex mx-auto flex-col sm:flex-row dark:bg-neutral-200  " >
      <div className='basis-3/5 my-auto mx-0 pl-[5%]'>
      <hr className='w-28 h-1 bg-primary lg:flex md:flex hidden'/>
            <h3 className='md:pt-2 pt-32 font-bold md:text-3xl text-base text-primary font-serif dark:text-sky-950'>Welcome to Massie & Company</h3>
            <h1 className='md:text-4xl lg:text-5xl font-bold font-serif md:py-5 pt-0  text-black capitalize'>Your Trusted <br /> Construction CPA Firm</h1>
            <div className='flex items-center md:mb-0 mb-5'>
           <button className='btn lg:p-3 md:p-2 p-2 rounded  md:static text-primary border-4 border-primary bg-white dark:bg-neutral-200  dark:border-black dark:hover:text-primary  dark:hover:border-primary dark:text-black hover:bg-primary hover:text-white font-bold'>Learn More</button>
          
            {/* <button data-modal-target="default-modal" data-modal-toggle="default-modal" type="button"> 
            <img src={videobtn} alt=""  className='pl-2'/> </button> */}
            <Model/>
            <p className='pl-2 text-xl capitalize font-normal'>Watch Video</p>           
            </div>
      </div>
      <div className='basis-2/5'>
      <img src={headerimg} alt="" className='w-full'/>
      </div>
    </div>
    <div className='bg-[#F8F8F8] py-6 dark:bg-neutral-200 '> 
    <Swiper navigation={true} modules={[Navigation]}       
      slidesPerView={1}
        spaceBetween={10}
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
          1440: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
        }}
        className="mySwiper gap-3 pl-[5%] pr-[5%] py-5"
        loop>
        <SwiperSlide className='justify-center flex items-center my-auto mx-0'><img src={aicpa} alt="" /></SwiperSlide>
        <SwiperSlide className='justify-center flex items-center my-auto mx-0'><img src={uca} alt="" /></SwiperSlide>
        <SwiperSlide className='justify-center flex items-center my-auto mx-0'><img src={biaw} alt="" /></SwiperSlide>
        <SwiperSlide className='justify-center flex items-center my-auto mx-0'><img src={swca} alt="" /></SwiperSlide>
        <SwiperSlide className='justify-center flex items-center my-auto mx-0'><img src={cfma} alt="" /></SwiperSlide>
        <SwiperSlide className='justify-center flex items-center my-auto mx-0'><img src={aicpa} alt="" /></SwiperSlide>
        
      </Swiper>
      </div>
    </>
  )
}

export default Header




