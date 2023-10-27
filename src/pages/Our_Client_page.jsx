import React from 'react'
import Tex_services_page_props from "../components/Tex_services_page_props";
import clientcard1 from "../assets/clientcard1.png";
import Commen_header_sec from "../components/Commen_header_sec";
import clientpagebg from '../assets/clientpagebg.png';
import clientcrd1 from '../assets/clientcrd1.png';
import clientcrd2 from '../assets/clientcrd2.png';
import Our_client_page_props from '../components/Our_client_page_props';

function Our_Client_page() {
  return (
    <>
          <Commen_header_sec 
              title="Massie & Affiliations Clients"
              background={{background:`url(${clientpagebg})`}}/> 
    
          <Tex_services_page_props
     sideimg={clientcard1}
     timelineh1="General Contracting:"
     timelinep1="Clients engaged in general contracting services, overseeing and managing construction projects across various industries."
     timelineh2="Heavy Construction and Earthwork:"
     timelinep2="Clients involved in large-scale construction projects and earthmoving activities, such as excavation, grading, and site preparation."
     timelineh3="Construction Management:"
     timelinep3="Clients specializing in providing management and oversight services for construction projects, ensuring smooth execution and coordination."
     timelineh4="Environmental Construction:"
     timelinep4="Clients focused on environmentally friendly construction practices, specializing in sustainable and eco-conscious projects."
     timelineh5="Plumbing and HVAC:"
     timelinep5="Clients offering plumbing and heating, ventilation, and air conditioning services for residential, commercial, and industrial properties."
     />
     <Our_client_page_props
     sideimg={clientcrd1}
     timelineh1="Electrical:"
     timelinep1="Clients providing electrical services, installations, and maintenance for buildings and infrastructure."
     timelineh2="Roofing:"
     timelinep2="Clients engaged in roofing installations and repairs for residential and commercial properties."
     timelineh3="Bridges & Structures:"
     timelinep3="Clients involved in the construction and maintenance of bridges and other infrastructure projects."
     timelineh4="Land Developing:"
     timelinep4="Clients focused on the development of land for residential or commercial use, including infrastructure planning and construction."
     timelineh5="Apartment Complexes:"
     timelinep5="Clients who own and manage apartment complexes, offering housing solutions to tenants."
     timelineh6="Residential Home Building:"
     timelinep6="Clients engaged in constructing new residential homes for sale or rent."
     timelineh7="Residential Home Building:"
     timelinep7="Clients engaged in constructing new residential homes for sale or rent."
     timelineh8="Residential Home Building:"
     timelinep8="Clients engaged in constructing new residential homes for sale or rent."
     timelineh9="Residential Home Building:"
     timelinep9="Clients engaged in constructing new residential homes for sale or rent."
     timelineh10="Residential Home Building:"
     timelinep10="Clients engaged in constructing new residential homes for sale or rent."/>


<Our_client_page_props
     sideimg={clientcrd2}
     timelineh1="Electrical:"
     timelinep1="Clients providing electrical services, installations, and maintenance for buildings and infrastructure."
     timelineh2="Roofing:"
     timelinep2="Clients engaged in roofing installations and repairs for residential and commercial properties."
     timelineh3="Bridges & Structures:"
     timelinep3="Clients involved in the construction and maintenance of bridges and other infrastructure projects."
     timelineh4="Land Developing:"
     timelinep4="Clients focused on the development of land for residential or commercial use, including infrastructure planning and construction."
     timelineh5="Apartment Complexes:"
     timelinep5="Clients who own and manage apartment complexes, offering housing solutions to tenants."
     timelineh6="Residential Home Building:"
     timelinep6="Clients engaged in constructing new residential homes for sale or rent."
     timelineh7="Residential Home Building:"
     timelinep7="Clients engaged in constructing new residential homes for sale or rent."
     timelineh8="Residential Home Building:"
     timelinep8="Clients engaged in constructing new residential homes for sale or rent."
     timelineh9="Residential Home Building:"
     timelinep9="Clients engaged in constructing new residential homes for sale or rent."
     timelineh10="Residential Home Building:"
     timelinep10="Clients engaged in constructing new residential homes for sale or rent."/>
    </>
    
    
  )
}

export default Our_Client_page
