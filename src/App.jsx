

import Footer from "./components/Footer";
import About from "./pages/About";
import Home from "./pages/Home";
import Resources_page from "./pages/Resources_page";
import Services from "./pages/Services";
import Navbaar_2 from "./components/Navbaar_2";
import React from "react";
import {  Routes, Route, } from "react-router-dom";
import Privacy_policy_page from "./pages/Privacy_policy_page";
import Contact_us_page from "./pages/Contact_us_page";
import Job_opportuninty_page from "./pages/Job_opportuninty_page";
import Terms_main_page from "./pages/Terms_main_page";
import Client_portal_page from "./pages/Client_portal_page";
import Why_wer_different_page from "./pages/Why_wer_different_page";
import Discover_your_dream_page from "./pages/Discover_your_dream_page";
import Blogs_main_page from "./pages/Blogs_main_page";
import Blogs_detail_page from "./pages/Blogs_detail_page";
import Mission_and_values_page from "./pages/Mission_and_values_page";
import Leadership_page from "./pages/Leadership_page";
import Affiliation_page from "./pages/Affiliation_page";
import Review from "./components/Review";
import Business_lifecycle_page from "./pages/Business_lifecycle_page";
import Advisory_page from "./pages/Advisory_page";
import Our_Client_page from "./pages/Our_Client_page";

function App() {
  return (
    <>
      <Navbaar_2 />
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/services" element={<Services/>} />
          <Route exact path="/resources" element={<Resources_page/>} />
          <Route exact path="/contact" element={<Contact_us_page/>} />
          <Route exact path="/policy" element={<Privacy_policy_page/>} />
          <Route exact path="/terms" element={<Terms_main_page/>} />
          <Route exact path="/job" element={<Job_opportuninty_page/>} />
          <Route exact path="/client-portal-page" element={<Client_portal_page/>} />
          <Route exact path="/why-we-different-page" element={<Why_wer_different_page/>} />
          <Route exact path="/discover-your-dream" element={<Discover_your_dream_page/>} />
          <Route exact path="/blogs" element={<Blogs_main_page/>} />
          <Route exact path="/blogs-detail" element={<Blogs_detail_page/>} />
          <Route exact path="/mission-and-values" element={<Mission_and_values_page/>} />
          <Route exact path="/leadership" element={<Leadership_page/>} />
          <Route exact path="/affiliation" element={<Affiliation_page/>} />
          <Route exact path="/review" element={<Review/>} />
          <Route exact path="/lifecycle" element={<Business_lifecycle_page/>} />
          <Route exact path="/advisory" element={<Advisory_page/>} />
          <Route exact path="/ourclientpage" element={<Our_Client_page/>} />


        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
