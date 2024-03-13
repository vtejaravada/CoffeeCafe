
import React from 'react'

const About = ({heading}) => {
  return (
    <>
        <h1 className='heading'>{heading}</h1>
        <section className="about">
            <img src={require("../../../Assets/Coffee 3.jpg")} alt="" />
            <div className="content">

                <h2>Lorem ipsum dolor sit amet.</h2>

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores praesentium adipisci facere consectetur cumque, quia voluptatum, in expedita, nemo repellendus asperiores inventore sed fugit neque. Ipsum praesentium expedita quas perferendis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores praesentium adipisci facere consectetur cumque, quia voluptatum, in expedita, nemo repellendus asperiores inventore sed fugit neque. Ipsum praesentium expedita quas perferendis.</p>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur omnis nam eaque delectus expedita asperiores amet est, molestias.</p>

            </div>
        </section>
    </>
  )
}

export default About