import React from 'react'
import Commen_header_sec from "../components/Commen_header_sec";
import affiliationbg from '../assets/affiliationbg.png';
import aicpa from '../assets/aicpa.png';
import uca from '../assets/uca.png';
import biaw from '../assets/biaw.png';
import swca from '../assets/swca.png';
import cfma from '../assets/cfma.png';



function Affiliation_page() {
  return (
    <>
       <Commen_header_sec 
              title="Massie Affiliations"
              background={{background:`url(${affiliationbg})`}}/> 
               <h2 className=" dark:bg-neutral-200 lg:text-xl md:text-xl text-base font-serif font-bold px-[5%] pt-[5%]">Affiliations</h2>
              <div className=" dark:bg-neutral-200 grid p-[5%] gap-6 lg:grid-cols-4 md:grid-cols-4 grid-cols-2 justify-center items-center">
               
              <div><img src={uca} alt="" /></div>
              <div><img src={swca} alt="" /></div>
              <div><img src={aicpa} alt="" /></div>
                <div><img src={biaw} alt="" /></div>
                <div><img src={cfma} alt="" /></div>
                <div><img src={aicpa} alt="" /></div>
                <div><img src={swca} alt="" /></div>
              <div><img src={uca} alt="" /></div>
              </div>
    </>
  )
}

export default Affiliation_page
