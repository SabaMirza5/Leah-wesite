import React from "react";
import client1 from '../assets/client1.png';
import client2 from '../assets/client2.png';
import client3 from '../assets/client3.png';

function Client_review_sec() {
  return (
    <>

<div className="flex pl-[5%] pr-[5%] flex-col sm:flex-row gap-7 pb-9 dark:bg-neutral-200">
<div className="left basis-1/2">
<h2 className="font-serif font-bold  lg:text-4xl md:text-xl text-base text-primary dark:text-gray-800">What our</h2>
<p className="font-bold font-serif capitalize lg:text-4xl md:text-xl text-base pb-6 ">Client say about us</p>
<p className="lg:text-lg md:text-base text-sm font-normal text-black font-serif capitalize text-justify">
            Over the past 7 years, Massie & Co has been the corporate CPA for
            our construction business and related entities. They've proactively
            handled our Reviewed Financial Statements and Corporate Tax Returns
            for 4 entities operating in 4 different states, and are always
            "looking forward" for us. We've found Massie's consultative and
            forward thinking approach has been a refreshing change and is a
            tremendous help for us in managing our finances and taxes over our
            past CPA. Thank you! William Marcus
          </p>
          <p className="py-3 lg:text-lg md:text-base text-sm font-normal text-black font-serif capitalize text-justify">
            Right from the beginning, Massie impressed us with the quick and
            up-front responses to our questions. All the way through the RFP
            process we were consistently met with the "up front" and open
            communication we were lacking from our prior CPA. It always felt
            like we had to extract information from our prior CPA, and with
            Massie they're up front and open, very refreshing! Kevin Larkin
          </p>
          <button className='btn p-2 rounded  md:static text-primary border-4 border-primary bg-white dark:bg-neutral-200  dark:border-black dark:hover:text-primary  dark:hover:border-primary dark:text-black hover:bg-primary hover:text-white font-bold'>Learn More</button>
          {/* <button className="text-primary  border-4 border-primary bg-white p-2  hover:bg-primary  hover:text-white font-bold mt-5">
            Read More
          </button> */}
        </div>
         <div className="right basis-1/2 lg:mt-0  pt-20">
            <div className="rounded-md bg-[#F8F8F8] dark:bg-neutral-300 p-3 border-l-4 border-l-primary lg:ml-20 flex">
            <img src={client1} alt="" className="w-[95px] h-[95px]" />
            <div className="pl-4">
              <p className="lg:text-2xl  md:text-2xl text-base text-black font-serif font-normal">Marianne Haskell</p>
              <p className=" lg:text-sm  md:text-sm text-xs  font-normal text-black font-serif">Right from the beginning, they impressed us with their personalized and consultative approach</p>
            </div>
          </div>

          <div className="rounded-md bg-[#F8F8F8]  dark:bg-neutral-300 p-3 border-l-4 border-l-primary  flex lg:mr-10 mt-5">
            <img src={client2} alt="" className="w-[95px] h-[95px]" />
            <div className="pl-4">
              <p className="lg:text-2xl  md:text-2xl text-base text-black font-serif font-normal">Jacob Williams</p>
              <p className=" lg:text-sm  md:text-sm text-xs  font-normal text-black font-serif">Right from the beginning, they impressed us with their personalized and consultative approach</p>
            </div>
          </div>
          <div className="rounded-md bg-[#F8F8F8] dark:bg-neutral-300 p-3 border-l-4 border-l-primary lg:ml-20 flex   mt-5">
            <img src={client1} alt="" className="w-[95px] h-[95px]" />
            <div className="pl-4">
              <p className="lg:text-2xl  md:text-2xl text-base text-black font-serif font-normal">Michael Stanton</p>
              <p className=" lg:text-sm  md:text-sm text-xs  font-normal text-black font-serif">Right from the beginning, they impressed us with their personalized and consultative approach</p>
            </div>
          </div>
         
        
       
</div>
</div>
    </>
  );
}

export default Client_review_sec;
