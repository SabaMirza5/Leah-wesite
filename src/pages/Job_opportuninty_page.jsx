import React from 'react'
import Commen_header_sec from "../components/Commen_header_sec";
import jobbg from '../assets/jobbg.png';
import Job_opportuninty from '../components/Job_opportunity';

function Job_opportuninty_page() {
  return (
    <>
        <Commen_header_sec 
              title=" Job Opportunities"
              background={{background:`url(${jobbg})`}}/>
              <Job_opportuninty/>
              
    </>
  )
}

export default Job_opportuninty_page
