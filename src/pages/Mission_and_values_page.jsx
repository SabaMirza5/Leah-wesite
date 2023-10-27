import React from "react";
import Commen_header_sec from "../components/Commen_header_sec";
import missionbg from "../assets/missionbg.png";
import Mission_and_values from "./Mission_and_values";

function Mission_and_values_page() {
  return (
    <>
      <Commen_header_sec
        title="Mission and Core Values"
        background={{ background: `url(${missionbg})` }}
      />

      <div className="p-[5%]">
        <h1 className="lg:text-xl md:text-xl text-base font-serif font-bold">
          Our Mission:
        </h1>
        <p className="lg:text-lg md:text-lg text-sm font-serif font-normal py-2">
          At Massie and Company, our mission is to cultivate enduring
          partnerships with the shareholders and stakeholders in our specialty
          industries. By establishing the local standard for unparalleled
          accounting, tax, and consulting services, we aim to deliver the
          highest quality solutions that foster long-term trust and success.
        </p>
      </div>
      <Mission_and_values/>
    </>
  );
}

export default Mission_and_values_page;
