import React from 'react'
import Blogs_props_page from './Blogs_props_page'
import blog1 from "../assets/blog1.png";
import blog3 from "../assets/blog3.png";
import blog4 from "../assets/blog4.png";
import blog5 from "../assets/blog5.png";
import blog6 from "../assets/blog6.png";

function Blogs_page() {
  return (
    <>
    <div className="grid lg:grid-cols-3 md:grid-cols-2  grid-cols-1 gap-7 pl-[5%] pr-[5%] my-10">
    <Blogs_props_page 
    imgsrc={blog1}
    title="Our Commitment to Excellence"
    para="At Massie & Company, we believe in delivering the highest quality accounting, tax, and consulting services to our valued clients. Our team of experienced professionals is dedicated to helping our clients solve their present challenges while also identifying opportunities."
    />
     <Blogs_props_page 
    imgsrc={blog6}
    title="Our Commitment to Excellence"
    para="At Massie & Company, we believe in delivering the highest quality accounting, tax, and consulting services to our valued clients. Our team of experienced professionals is dedicated to helping our clients solve their present challenges while also identifying opportunities."
    />
     <Blogs_props_page 
    imgsrc={blog3}
    title="Our Commitment to Excellence"
    para="At Massie & Company, we believe in delivering the highest quality accounting, tax, and consulting services to our valued clients. Our team of experienced professionals is dedicated to helping our clients solve their present challenges while also identifying opportunities."
    />
     <Blogs_props_page 
    imgsrc={blog4}
    title="Our Commitment to Excellence"
    para="At Massie & Company, we believe in delivering the highest quality accounting, tax, and consulting services to our valued clients. Our team of experienced professionals is dedicated to helping our clients solve their present challenges while also identifying opportunities."
    />
     <Blogs_props_page 
    imgsrc={blog5}
    title="Our Commitment to Excellence"
    para="At Massie & Company, we believe in delivering the highest quality accounting, tax, and consulting services to our valued clients. Our team of experienced professionals is dedicated to helping our clients solve their present challenges while also identifying opportunities."
    />
     <Blogs_props_page 
    imgsrc={blog6}
    title="Our Commitment to Excellence"
    para="At Massie & company, we believe in delivering the highest quality accounting, tax, and consulting services to our valued clients. Our team of experienced professionals is dedicated to helping our clients solve their present challenges while also identifying opportunities."
    />
    </div>
    </>
  )
}

export default Blogs_page
