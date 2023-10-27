// import React from 'react'
import heavycons from '../assets/heavycons.png';
import constmang from '../assets/constmang.png';
import envirnconst from '../assets/envirnconst.png';
import pulmbingtool from '../assets/pulmbingtool.png';
import electrical from '../assets/electrical.png';
import roofing from '../assets/roofing.png';
import generalcons from '../assets/generalcons.png';
import fencing from '../assets/fencing.png';
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
// import './styles.css';

function Our_client_sec() {
  return (
    <>
    <div className='bg-[#F8F8F8]'> 
    <div className='mt-20'>
    <h2 className='font-bold font-serif capitalize lg:text-4xl  md:text-4xl text-2xl pb-6 justify-center text-center pt-5'>Our Clients</h2>
    </div>
    <Swiper
        slidesPerView={1}
        spaceBetween={10}
        navigation={true} modules={[Navigation]}
      
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 1,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 50,
          },
          1440: {
            slidesPerView: 8,
            spaceBetween: 30,
          },
        }}
        className="mySwiper gap-3 pl-[5%] pr-[5%] py-5"
        loop
      >
      <SwiperSlide>
        <div className='justify-center text-center flex flex-col items-center'>
           <img src={heavycons} alt="" className='w-[36.25px] h-[29.659px]'/>
           <p className='text-base font-sans font-normal text-black pt-7'>Heavy construction and earthwork</p>
        </div>
      </SwiperSlide>
      <SwiperSlide> 
        <div className='justify-center text-center flex flex-col items-center'>
        <img src={constmang} alt="" />
          <p className='text-base font-sans font-normal text-black pt-7'>Construction<br />management</p>
        </div></SwiperSlide>
      <SwiperSlide>
      <div className='justify-center text-center flex flex-col items-center'>
      <img src={envirnconst} alt="" />
       <p className='text-base font-sans font-normal text-black  pt-7'>Environmental <br />construction</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className='justify-center text-center flex flex-col items-center'>
      <img src={pulmbingtool} alt="" />
      <p className='text-base font-sans font-normal text-black pt-7'> Plumbing and <br />HVAC</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className='justify-center text-center flex flex-col items-center'>
      <img src={electrical} alt="" />
           <p className='text-base font-sans font-normal text-black pt-7'>Electrical</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className='justify-center text-center flex flex-col items-center'>
      <img src={roofing} alt="" />
          <p className='text-base font-sans font-normal text-black  pt-7'>Roofing</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className='justify-center text-center flex flex-col items-center'>
      <img src={generalcons} alt="" />
           <p className='text-base font-sans font-normal text-black pt-7 '>General contracting</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className='justify-center text-center flex flex-col items-center'>
           <img src={heavycons} alt="" className='w-[36.25px] h-[29.659px]'/>
           <p className='text-base font-sans font-normal text-black pt-7'>Heavy construction and earthwork</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className='justify-center text-center flex flex-col items-center'>
      <img src={fencing} alt="" />
          <p className='text-base font-sans font-normal text-black '>Fencing</p>
        </div>
      </SwiperSlide>
    </Swiper>
    </div>
  </>
  )
}

export default Our_client_sec
