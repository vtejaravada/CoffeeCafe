import React from 'react';
import Navbar from '../../Comonents/Navbar/Navbar';
import Hero from './Components/Hero';
import About from './Components/About';
import Services from './Components/Services';
import CallToAction from './Components/CallToAction';
import Faq from './Components/Faq';
import Footer from '../../Comonents/Footer/Footer';

import "../Home/Home.css";

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About heading = "About us"/>
      <Services/>
      <CallToAction/>
      <Faq/>
      <Footer/>
    </div>
  )
}

export default Home