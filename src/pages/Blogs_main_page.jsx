import React from 'react'
import Commen_header_sec from "../components/Commen_header_sec";
import blogsbg from '../assets/blogsbg.png';
import Blogs_page from '../components/Blogs_page';

function Blogs_main_page() {
  return (
    <>
       <Commen_header_sec 
              title="Massie & Company Blogs"
              background={{background:`url(${blogsbg})`}}/> 
              <Blogs_page/>
    </>
  )
}

export default Blogs_main_page
