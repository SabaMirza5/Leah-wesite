import React from "react";
import job_img from '../assets/job_img.png';

function Job_opportuninty() {
  return (
    <>
    <div className="flex lg:flex-row  flex-col pl-[5%] pr-[5%] pt-[5%] gap-8">
      <div className="basis-1/2">
      <h1 className="lg:text-4xl md:text-4xl text-xl font-serif font-bold">
      Job Opportunities
          </h1>
          <p className="lg:text-lg md:text-lg text-sm font-serif font-normal py-2">
          At Massie & Company CPA, we strongly believe that our employees are the foundation of our success. As such, we prioritize staffing and invest in creating a positive and rewarding work environment for our team members. We are committed to providing an atmosphere that encourages professional growth, work-life balance, and overall job satisfaction.
          </p>
          <p className="lg:text-lg md:text-lg text-sm font-serif font-normal py-2">
          <span className="text-[#1E559B] font-bold">Flexible Working Hours and Schedules:</span>{" "}

          We understand the importance of work-life balance and recognize that each employee's needs and preferences may vary. To accommodate diverse lifestyles and commitments, we offer flexible working hours and schedules. This allows our employees to find a balance that suits their personal and professional responsibilities, fostering a healthy and productive work environment.
          </p>
          <p className="lg:text-lg md:text-lg text-sm font-serif font-normal py-2">
            <span className="text-[#1E559B] font-bold">
            Comprehensive Benefits Package:
            </span>{" "}
            We care about the well-being of our employees and their families. Hence, we provide a comprehensive benefits package that goes beyond just a salary. Our benefits may include health insurance, retirement plans, paid time off, professional development opportunities, and other perks, ensuring our team feels supported and valued.

          </p>
          <p className="lg:text-lg md:text-lg text-sm font-serif font-normal py-2">
            <span className="text-[#1E559B] font-bold">Security:</span> You are
            responsible for maintaining the confidentiality of your Massie Free
            Benchmarking Tool  account login credentials. Any activities
            performed using your account will be attributed to you. If you
            suspect unauthorized access to your account, you must notify us
            immediately.
          </p>
          
      </div>
      <div className="basis-1/2">
        <img src={job_img} alt=""  className="w-full"/>
      </div>
    </div>
    <div className="flex  flex-col pl-[5%] pr-[5%] pb-[5%]">
        
          <p className="lg:text-lg md:text-lg text-sm font-serif font-normal py-2">
            <span className="text-[#1E559B] font-bold">
            Professional Growth and Development:
            </span>{" "}
            At Massie & Company CPA, we believe in fostering a culture of continuous learning and professional growth. We encourage our employees to expand their skills and knowledge through various training programs, workshops, and certifications. We also provide opportunities for career advancement within the firm, recognizing and nurturing potential leaders.
          </p>
          <p className="lg:text-lg md:text-lg text-sm font-serif font-normal py-2">
            <span className="text-[#1E559B] font-bold">Collaborative and Supportive Environment:</span> Our firm is built on a foundation of teamwork and collaboration. We promote a supportive environment where employees can openly share ideas, seek assistance, and work together to deliver exceptional service to our clients. We believe that a strong sense of camaraderie enhances productivity and job satisfaction.
          </p>
          <p className="lg:text-lg md:text-lg text-sm font-serif font-normal py-2">
            <span className="text-[#1E559B] font-bold">Employee Recognition and Appreciation: </span> We take pride in acknowledging the efforts and achievements of our employees. Whether it's through regular performance evaluations, awards, or simple expressions of appreciation, we ensure that our team members feel recognized and valued for their contributions.
          </p>
          <p className="lg:text-lg md:text-lg text-sm font-serif font-normal py-2">
            While there are currently no job openings at Massie & Company CPA, we encourage talented individuals with a passion for accounting, tax, and consulting services to stay updated on our website or social media channels for future opportunities. We are always on the lookout for exceptional professionals who align with our values and can contribute to our continued growth and success. If you believe you would be a great fit for our team, we welcome you to submit your application when a suitable position becomes available
          </p>
        </div>
      
    </>
  );
}

export default Job_opportuninty;
