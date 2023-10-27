import React from 'react'
import Commen_header_sec from "../components/Commen_header_sec";
import privacypolicebg from '../assets/privacypolicebg.png';
import Privacy_policy from '../components/Privacy_policy';

function Privacy_policy_page() {
  return (
    <>
         <Commen_header_sec 
              title="Privacy Policy"
              background={{background:`url(${privacypolicebg})`}}/>
            <Privacy_policy/>
    </>
  )
}

export default Privacy_policy_page
