import React from 'react'
import Navbar from '../../Comonents/Navbar/Navbar'
import Header from '../../Comonents/Header/Header'
import Footer from '../../Comonents/Footer/Footer'


import "../Contact/Contact.css"
import Form from './Component/Form'

const Contact = () => {
  return (
    <>
      <Navbar/>
      <Header heading="Contact Page"/>
      <Form/>
      <Footer/>
    </>
  )
}

export default Contact