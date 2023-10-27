import React from 'react'
import Commen_header_sec from "../components/Commen_header_sec";
import servicesbg from '../assets/servicesbg.png';
import Tex_services_page from '../components/Tex_services_page';


function Services() {
  return (
    <>
         <Commen_header_sec 
              title="Massie & Company Tax Services"
              background={{background:`url(${servicesbg})`}}/>
              <Tex_services_page/>
    </>
  )
}

export default Services
