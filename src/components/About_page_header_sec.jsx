
import React from "react";
import Commen_header_sec from "./Commen_header_sec";
import aboutbg from '../assets/aboutbg.png';

function About_page_header_sec() {
  return (
    <> 
            <Commen_header_sec 
              title="Welcome to Massie & Company"
              background={{background:`url(${aboutbg})`}}  />
    </>
  );
}

export default About_page_header_sec