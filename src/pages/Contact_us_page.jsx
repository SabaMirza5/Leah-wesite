import React from 'react'
import Commen_header_sec from "../components/Commen_header_sec";
import contactusbg from '../assets/contactusbg.png';
import Contact_us_mainpage_sec from '../components/Contact_us_mainpage_sec';

function Contact_us_page() {
  return (
    <>
       <Commen_header_sec 
              title="Contact Massie & Company"
              background={{background:`url(${contactusbg})`}}/>
              <Contact_us_mainpage_sec/>
    </>
  )
}

export default Contact_us_page
