import React from "react";

function Mission_and_values_props(props) {
  return (
    <>
      <div className="flex lg:flex-row md:flex-row flex-col">
        <div className="basis-1/2">
          <img src={props.missionimg} alt="" />
        </div>
        <div className="basis-1/2 m-auto p-10">
          <h2 className="lg:text-xl md:text-xl text-base font-serif font-bold">{props.missionheading}</h2>
          <p className="lg:text-lg md:text-lg text-xs font-serif font-normal py-2 lg:w-[250px]"> {props.missionpera}</p>
        </div>
      </div>
      <div className="flex lg:flex-row md:flex-row flex-col lg:mb-0 md:mb-0 mb-8">
      
        <div className="basis-1/2 m-auto p-10">
          <h2 className="lg:text-xl md:text-xl text-base font-serif font-bold">{props.missionheading2}</h2>
          <p className="lg:text-lg md:text-lg text-xs font-serif font-normal py-2 lg:w-[250px]">{props.missionpera2}</p>
        </div>
        <div className="basis-1/2">
          <img src={props.missionimg2} alt="" />
        </div>
      </div>
    </>
  );
}

export default Mission_and_values_props;
