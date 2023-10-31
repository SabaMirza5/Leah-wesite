import React from 'react'
import Commen_header_sec from "../components/Commen_header_sec";
import blogsbg from '../assets/blogsbg.png';
import tr from '../assets/tr.png';
import tr2 from '../assets/tr2.png';

function Leadership_page() {
  return (
    <>
        <Commen_header_sec 
              title="Massie & Company Leadership"
              background={{background:`url(${blogsbg})`}}/> 
              <div className="lg:flex-row flex  flex-col p-[5%] gap-6 dark:bg-neutral-200">
                <div className="basis-1/2">
                <h2 className="lg:text-xl md:text-xl text-base font-serif font-bold">Massie & Company Leadership</h2>
          <p className="lg:text-lg md:text-lg text-xs font-serif font-normal py-2 "> Jesse Massie is the visionary founder of Massie & Company, and his passion for the construction industry began at an early age. He comes from a family of constructiontradesman, and noticed contractors were different than other businesses so he formed a firm to focus on the needs of construction contractors and their owners.Based in Battle Ground, Washington Massie & Company has established itself as a trusted name in tax and accounting related services, having served the Southwest Washington and greater Portland, Oregon community for over 10 years.What sets us apart from other firms is our focus on the construction industry, and “today and forward” approach to taxes and accounting. Often firms focus on the past, we focus on the future and help you position yourself for the future.From our inception, our philosophy resolves around service, not sales. We firmly believe in partnering with clients who want good information, are willing to be vulnerable and want help making a plan. We invite you to experience the difference our dedicated service can make for your business.
          </p>
                </div>
                <div className="basis-1/2 flex gap-4 justify-center">
                  <img src={tr} alt="" className='lg:w-[200px] lg:h-[450px]  md:w-[250px] md:h-[450px] w-[130px] h-[250px]' />
                  <img src={tr2} alt=""  className='lg:w-[200px] lg:h-[450px]  md:w-[250px] md:h-[450px] w-[130px] h-[250px]'/>
                  {/* <img src={aboutbg} alt="" /> */}

                </div>
              </div>
    </>
  )
}

export default Leadership_page
