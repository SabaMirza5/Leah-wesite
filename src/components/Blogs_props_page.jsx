import React from 'react'
import { Link } from 'react-router-dom'

function Blogs_props_page(props) {
  return (
    <>
       <div className="card  shadow-lg rounded-md relative">
       <svg xmlns="http://www.w3.org/2000/svg" width="145"  className="absolute top-[-35px]  left-[-28px]" height="145" viewBox="0 0 145 145" fill="none">
  <g filter="url(#filter0_d_1_670)">
    <circle cx="72.5" cy="72.5" r="22.5" fill="white"/>
  </g>
  <path d="M81.2913 64.6118C80.7805 64.1008 80.1741 63.6955 79.5066 63.4189C78.8392 63.1423 78.1238 63 77.4013 63C76.6788 63 75.9634 63.1423 75.2959 63.4189C74.6285 63.6955 74.022 64.1008 73.5113 64.6118L72.4513 65.6718L71.3913 64.6118C70.3596 63.5801 68.9603 63.0005 67.5013 63.0005C66.0423 63.0005 64.643 63.5801 63.6113 64.6118C62.5796 65.6435 62 67.0428 62 68.5018C62 69.9609 62.5796 71.3601 63.6113 72.3918L64.6713 73.4518L72.4513 81.2318L80.2313 73.4518L81.2913 72.3918C81.8023 71.8811 82.2076 71.2746 82.4842 70.6072C82.7608 69.9397 82.9031 69.2243 82.9031 68.5018C82.9031 67.7793 82.7608 67.0639 82.4842 66.3965C82.2076 65.729 81.8023 65.1226 81.2913 64.6118Z" stroke="#1E559B" strokeWidth="2" strokeLinecap="round" strokellinejoin="round"/>
  <defs>
    <filter id="filter0_d_1_670" x="0" y="0" width="145" height="145" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
      <feFlood floodOpacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset/>
      <feGaussianBlur stdDeviation="25"/>
      <feComposite in2="hardAlpha" operator="out"/>
      <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.8 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_670"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_670" result="shape"/>
    </filter>
  </defs>
</svg>
   <img src={props.imgsrc} alt="my image here" className='w-full' />
   <div className="p-[5%]">
   <h3 className="card-title lg:text-xl md:text-xl text-base font-bold ">{props.title}</h3>
   <p className="card-category lg:text-base md:text-base text-sm font-serif pt-3">{props.para}</p>
   <button className=' bg-primary  flex text-white p-3 my-3 font-serif font-normal rounded-lg'><Link to="/blogs-detail">Read More</Link><span className='ms-3'><svg xmlns="http://www.w3.org/2000/svg" width="28" height="24" viewBox="0 0 28 24" fill="none">
  <path d="M2 12L26 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M19 5L26 12L19 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg></span></button>
   </div>
   </div>
    </>
  )
}

export default Blogs_props_page
