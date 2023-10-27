import React from 'react'
import Commen_header_sec from "../components/Commen_header_sec";
import termsbg from '../assets/termsbg.png';
import Terms_page from '../components/Terms_page';

function Terms_main_page() {
  return (
    <>
     <Commen_header_sec 
              title="Terms & Conditions"
              background={{background:`url(${termsbg})`}}/> 
              <Terms_page/>
    </>
  )
}

export default Terms_main_page
