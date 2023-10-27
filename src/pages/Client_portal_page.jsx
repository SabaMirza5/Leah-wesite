import React from 'react'
import Commen_header_sec from '../components/Commen_header_sec'
import clientportlbg from '../assets/clientportlbg.png';
import Client_portal from '../components/Client_portal';

function Client_portal_page() {
  return (
    <>
       <Commen_header_sec 
              title="Massie & Company Portal"
              background={{background:`url(${clientportlbg})`}}/>
             <Client_portal/>
             </>
  )
}

export default Client_portal_page
