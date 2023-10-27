import React from 'react'
import Commen_header_sec from "../components/Commen_header_sec";
import blogdetailbg from '../assets/blogdetailbg.png';
import Blog_detail_page_article from '../components/Blog_detail_page_article';

function Blogs_detail_page() {
  return (
    <div>
       <Commen_header_sec 
              title="Massie & Company Blogs"
              background={{background:`url(${blogdetailbg})`}}/> 
              <Blog_detail_page_article/>
    </div>
  )
}

export default Blogs_detail_page
