import React from 'react'

function Tex_services_page_props(props) {
  return (
    <>
       <div className="flex lg:flex-row md:flex-row flex-col p-[5%] gap-8">
        <div className="basis-2/5">
          <img src={props.sideimg} alt="" className="w-full" />
        </div>
        <div className="basis-3/5">
          <h1 className="lg:text-4xl md:text-4xl text-2xl font-serif font-bold">
           {props.mainheading}
          </h1>
          <p className="lg:text-lg md:text-lg text-base font-serif font-normal pt-4">
        {props.mainpera}
          </p>
          <h2 className="lg:text-xl md:text-xl text-lg font-serif pt-4 font-bold">{props.heading2}
          </h2>
          <p className="lg:text-lg md:text-lg text-base font-serif font-normal pt-4">{props.pera2}
          </p>
          <h2 className="lg:text-xl md:text-xl text-lg font-serif pt-4 font-bold">{props.heading3}
          </h2>
          <div className="-my-6">
            <div className="relative pl-8 sm:pl-3 pt-6 group">
              <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-blue-400 after:rounded-full  after:-translate-x-1/2 after:translate-y-1.5"></div>
              <div className="pop-font lg:text-lg md:text-lg text-[#1E559B] font-bold">{props.timelineh1}
                <p className="lg:text-lg md:text-lg font-normal text-black">{props.timelinep1}
                </p>
              </div>
            </div>
            <div className="relative pl-8 sm:pl-3 pt-6 group">
              <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-blue-400 after:rounded-full  after:-translate-x-1/2 after:translate-y-1.5"></div>
              <div className="pop-font lg:text-lg md:text-lg text-[#1E559B] font-bold">{props.timelineh2}
                <p className="lg:text-lg md:text-lg font-normal text-black">{props.timelinep2}
                </p>
              </div>
            </div>
            <div className="relative pl-8 sm:pl-3 pt-6 group">
              <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-blue-400 after:rounded-full  after:-translate-x-1/2 after:translate-y-1.5"></div>
              <div className="pop-font lg:text-lg md:text-lg text-[#1E559B] font-bold">{props.timelineh3}
                <p className="lg:text-lg md:text-lg font-normal text-black">{props.timelinep3}
                </p>
              </div>
            </div>
            <div className="relative pl-8 sm:pl-3 pt-6 group">
              <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-blue-400 after:rounded-full  after:-translate-x-1/2 after:translate-y-1.5"></div>
              <div className="pop-font lg:text-lg md:text-lg text-[#1E559B] font-bold">{props.timelineh4}
                <p className="lg:text-lg md:text-lg font-normal text-black">{props.timelinep4}
                </p>
              </div>
            </div>
            <div className="relative pl-8 sm:pl-3 pt-6 group">
              <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-blue-400 after:rounded-full  after:-translate-x-1/2 after:translate-y-1.5"></div>
              <div className="pop-font lg:text-lg md:text-lg text-[#1E559B] font-bold">{props.timelineh5}
                <p className="lg:text-lg md:text-lg font-normal text-black">{props.timelinep5}
                </p>
              </div>
            </div>
           
           
          </div>
        </div>
      </div>
      <div className="p-[5%]">
        <h1 className="lg:text-4xl md:text-4xl text-2xl font-serif font-bold">{props.btmheading}
     
        </h1>
        <p className="lg:text-lg md:text-lg text-base font-serif font-normal pt-4">{props.btmpera}
        </p>
      </div>
    </>
  )
}

export default Tex_services_page_props
