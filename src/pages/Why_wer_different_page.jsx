
import Commen_header_sec from "../components/Commen_header_sec";
import whywedifferenetbg from "../assets/whywedifferenetbg.png";
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation } from 'swiper/modules';
import blogslider from '../assets/blogslider.png';

function Why_wer_different_page() {
  return (
    <>
      <Commen_header_sec
        title="Why We're Different"
        background={{ background: `url(${whywedifferenetbg})` }}
      />

      <div className="flex  flex-col p-[5%]">
        <h1 className="lg:text-4xl md:text-4xl text-xl font-serif font-bold">
          Why We're Different
        </h1>
        <p className="lg:text-lg md:text-lg text-sm font-serif font-normal py-2">
          At Massie and Company, we take immense pride in being distinct from
          the traditional accounting firms. Here's why we stand out:
        </p>
        <h2 className="lg:text-2xl md:text-2xl text-base font-bold font-serif text-primary ">
          Specialization in Construction:
        </h2>

        <p className="lg:text-lg md:text-lg text-sm font-serif font-normal py-2">
          At Massie and Company, construction is not just one of our many
          practice areas; it is our sole focus. We understand the intricacies,
          challenges, and unique financial aspects that construction businesses
          face. Our team is comprised of experienced professionals with a deep
          understanding of the construction industry's nuances. This
          specialization allows us to offer tailor-made solutions that drive
          your business towards greater success and sustainability.
        </p>

        <h2 className=" text-primary lg:text-2xl md:text-2xl text-base font-bold font-serif">
          Direct and To-the-Point Approach:
        </h2>
        <p className="lg:text-lg md:text-lg text-sm font-serif font-normal py-2">
          Time is of the essence in the construction industry, and we value it
          as much as you do. Our direct and to-the-point approach ensures that
          your financial matters are dealt with efficiently and promptly. We cut
          through the clutter to deliver actionable insights and strategies,
          saving you valuable time and resources. With us, you can expect clear
          and concise communication, minimizing any room for confusion or
          ambiguity.
        </p>
        <h2 className=" text-primary lg:text-2xl md:text-2xl text-base font-bold font-serif">
          Accuracy of Information:
        </h2>
        <p className="lg:text-lg md:text-lg text-sm font-serif font-normal py-2">
          Honesty and transparency are the pillars of our business philosophy.
          When you work with Massie and Company, you can be confident that we'll
          always provide honest and unbiased advice, even if it means giving you
          hard truths. Our integrity drives us to put your best interests first,
          helping you make informed decisions that align with your long-term
          goals. Building trust with our clients is our top priority, and we
          achieve that through candid and open dialogue.
        </p>
        <h2 className=" text-primary lg:text-2xl md:text-2xl text-base font-bold font-serif">
          Industry Insights that Empower You:
        </h2>
        <p className="lg:text-lg md:text-lg text-sm font-serif font-normal py-2">
          Beyond managing your finances, we believe in empowering our
          construction clients with valuable industry insights. As construction
          CPAs, we stay up-to-date with the latest industry trends, regulations,
          and best practices. By sharing this knowledge with you, we enable you
          to stay ahead of the competition, navigate challenges with ease, and
          seize lucrative opportunities.
        </p>
        <h2 className=" text-primary lg:text-2xl md:text-2xl text-base font-bold font-serif">
          Collaborative Partnership:
        </h2>
        <p className="lg:text-lg md:text-lg text-sm font-serif font-normal py-2">
          At Massie and Company, we see ourselves as more than just service
          providers; we aim to be your trusted partners. We invest time in
          understanding your unique business needs, aspirations, and pain
          points, forging a strong collaborative relationship. This deep
          connection allows us to align our services to your objectives,
          delivering results that exceed expectations.
        </p>
        <h2 className=" text-primary lg:text-2xl md:text-2xl text-base font-bold font-serif">
          Emphasis on Innovation:
        </h2>
        <p className="lg:text-lg md:text-lg text-sm font-serif font-normal py-2">
          In the fast-evolving construction landscape, innovation is key to
          staying competitive. We are committed to leveraging cutting-edge
          accounting technologies and tools that streamline processes and
          enhance accuracy. Our tech-savvy approach ensures that you have access
          to real-time financial data, enabling you to make proactive decisions
          and adapt swiftly to changing market conditions.
        </p>
      </div>

      <div className='py-6 '> 
    <Swiper navigation={true} modules={[Navigation]}       
        className="mySwiper  pl-[5%] pr-[5%]"
        loop>
        <SwiperSlide className='justify-center flex items-center my-auto mx-0 bg-no-repeat'><img src={blogslider} alt="" className="w-full" /></SwiperSlide>
        <SwiperSlide className='justify-center flex items-center my-auto mx-0'><img src={blogslider} alt="" className="w-full"/></SwiperSlide>
        <SwiperSlide className='justify-center flex items-center my-auto mx-0'><img src={blogslider} alt="" className="w-full"/></SwiperSlide>
      </Swiper>
      </div>

    </>
  );
}

export default Why_wer_different_page;
