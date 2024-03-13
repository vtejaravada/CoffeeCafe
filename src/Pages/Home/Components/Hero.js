import React from 'react'
import { Link } from "react-router-dom"
import video from "../../../Assets/Coffee.mp4"

const Hero = () => {
  return (
    <>
        <div className='hero'>
            <video src={video} autoPlay loop muted ></video>

            <div className='content'>
                <h1>Best Coffee Spot</h1>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo similique nostrum eaque officiis perferendis aperiam.
                </p>
                <div className='buttons'>
                    <Link to="/training">Try Now!</Link>
                    <Link to="/Contact">Launch!</Link>
                </div>
            </div>
        </div>
    </>
  )
}

export default Hero