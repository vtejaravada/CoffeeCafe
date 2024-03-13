import "./Footer.css";
import React from 'react'
import { BsCupHot } from "react-icons/bs";
import { TiSocialFacebook, TiSocialGooglePlus, TiSocialPinterest } from "react-icons/ti";
import { Link } from "react-router-dom";


const Footer = () => {
  const social = [TiSocialFacebook, TiSocialGooglePlus, TiSocialPinterest]
  return (
    <>
      <footer>
        <div className="logo">
          <h1><BsCupHot style={{color: "white"}} size={50}/> CAFE</h1>
        </div>
        
        <div className="links">
            <h3>Useful Links</h3>
              <div className="link">
                <Link to="/">Home</Link>
                <Link to="/training">Training</Link>
                <Link to="/pricing">Pricing</Link>
                <Link to="/contact">Contact</Link>
              </div>
        </div>

        <div className="social">

            {
              social.map((Icon, index) => {
                return <Icon key={index} style={{color: "white"}} size={50} />;
              })
            }

        </div>

      </footer>
    </>
  )
}

export default Footer