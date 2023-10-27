import React from 'react'
import Commen_header_sec from "../components/Commen_header_sec";
import resourcesbg from '../assets/resourcesbg.png';
import Resources_page_newsletter_page from '../components/Resources_page_newsletter_page';


function Resources_page() {
  return (
    <>
         <Commen_header_sec 
              title="Massie & Company Newsletter"
              background={{background:`url(${resourcesbg})`}}/>
              <Resources_page_newsletter_page/>
              
       
    </>
  )
}

export default Resources_page
