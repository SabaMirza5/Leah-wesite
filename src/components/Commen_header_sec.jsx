import React from "react";
function Commen_header_sec(props) {
  return (
    <>
      <div
        style={props.background} className="w-full img bg-no-repeat header-bg bg-cover  md:h-[80vh] h-[40vh]  flex flex-col md:flex-row gap-7">
          <div className="basis-full md:basis-1/2"></div>
          <div className="basis-full md:basis-1/2  items-end flex mb-11 lg:mr-11 md:mr-11">
            <div className="bg-white dark:bg-neutral-200 md:w-[502px] md:h-[150px]  h-16 ml-3 rounded flex justify-center items-center">
              <h3 className="lg:text-3xl md:text-3xl text-base font-bold capitalize px-6">
                {props.title}
              </h3>
            </div>
          </div>
      </div>
    </>
  );
}
export default Commen_header_sec;
