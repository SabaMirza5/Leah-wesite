import React from "react";
import card1 from "../assets/card1.png";
import card2 from "../assets/card2.png";
import card3 from "../assets/card3.png";
import card4 from "../assets/card4.png";
import card5 from "../assets/card5.png";
import card6 from "../assets/card6.png";
// import webd from "../assets/webd.png";
import About_card_sec_props from "./About_card_sec_props";

function About_card_sec_main() {
  return (
    <>
    <div className="dark:bg-neutral-200">
   <h1 className=" pl-[5%] pr-[5%] lg:text-lg md:text-lg text-sm font-serif  px-5 py-5"><span className="font-bold">Since 2013,</span> Massie & Company has been a leading certified public accounting firm based in Battle Ground, Washington and serving the greater Southwest Washington and Portland region.</h1>
    <div className="grid lg:grid-cols-3 md:grid-cols-2  grid-cols-1 gap-7 pl-[5%] pr-[5%] pb-6">
 
    <About_card_sec_props 
    imgsrc={card1}
    title="Our Commitment to Excellence"
    para="At Massie & Company, we believe in delivering the highest quality accounting, tax, and consulting services to our valued clients. Our team of experienced professionals is dedicated to helping our clients solve their present challenges while also identifying opportunities for future growth and success. With a client-centric approach, we tailor our solutions to meet the unique needs and goals of each individual or business we serve."
    />
     <About_card_sec_props 
    imgsrc={card2}
    title="Specialization and Expertise"
    para="We're passionate about the construction industry and it shows in our dedication to serving our clients. There is a lot of noise in today's environment and it's easy to get lost in what matters to your business. By focusing on the Construction Industry, we're able to cut through the noise and focus on the key information you need for turning the dials on your business."
    />
      <About_card_sec_props 
    imgsrc={card3}
    title="A History of Trust"
    para="Over the years, Massie & Company has earned the trust and confidence of our clients and their professional advisors, which is a testament to our commitment to excellence and personalized service. We take pride in building long-lasting relationships, and most of our clients have been with us for many years. Our success is a reflection of their satisfaction and the trust they place in our firm to exceed their expectations with exceptional results."
    />
      <About_card_sec_props 
    imgsrc={card4}
    title="Our Motto: Honest and Direct"
    para="As a construction CPA firm, we understand the importance of transparency and directness while maintaining a high degree of integrity in all our interactions. Our motto reflects our dedication to transparent communication, prompt service, and straightforward solutions. We don't believe in selling services; instead, we focus on solutions."
    />
      <About_card_sec_props 
    imgsrc={card5}
    title="Partner with Us"
    para="At Massie & Company, we invite you to partner with us and experience the true meaning of exceptional service. Whether you need assistance with tax planning, financial reporting, business consulting, restructuring or any other accounting-related matter, our team is here to support you every step of the way. Let us show you the difference that our expertise, dedication, and forward thinking approach can make for your business’ goals."
    />
      <About_card_sec_props 
    imgsrc={card6}
    title="Contact Us"
    para="Contact us today to discover how Massie & Company can help you thrive and succeed. We look forward to building a lasting partnership based on trust, integrity, and a shared commitment to your success."
    />
   
    </div>
    </div>
    </>
  );
}

export default About_card_sec_main