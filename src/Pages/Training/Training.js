import React from 'react'
import Navbar from '../../Comonents/Navbar/Navbar'
import Header from '../../Comonents/Header/Header'
import Footer from '../../Comonents/Footer/Footer'
import About from '../Home/Components/About'

const Training = () => {
  return (
    <>
      <Navbar/>
      <Header heading="Training Page"/>
      <About heading="Training"/>
      <Footer/>
    </>
  )
}

export default Training