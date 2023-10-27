
import React from 'react';
function About_card_sec_props(props) {
  return (
    <>
      
   <div className="card  shadow-lg rounded-md">
   <img src={props.imgsrc} alt="my image here" className='w-full' />
   <div className="p-[5%]">
   <h3 className="card-title lg:text-xl md:text-xl text-base font-bold ">{props.title}</h3>
   <p className="card-category lg:text-base md:text-base text-sm font-serif pt-3">{props.para}</p>
   </div>
   </div>
    </>
  );
}
export default About_card_sec_props