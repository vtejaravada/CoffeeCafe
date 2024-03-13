
import React from 'react'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

import img1 from "../../../Assets/Coffee1.jpg";
import img2 from "../../../Assets/Coffee2.jpg";
import img3 from "../../../Assets/Coffee3.jpg";
import img4 from "../../../Assets/Coffee4.jpg";
import img5 from "../../../Assets/Coffee5.jpg";
import img6 from "../../../Assets/Coffee6.jpg";
import img7 from "../../../Assets/Coffee7.jpg";
import img8 from "../../../Assets/Coffee8.jpg";




const Services = () => {

  const images = [img1, img2, img3, img4, img5, img6, img7, img8];
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow:3,
          slidesToScroll:2,
          infinite:true,
          dots:true,
        },
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow:2,
          slidesToScroll:2,
          initialSlide:2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow:1,
          slidesToScroll:1,
        },
      },
    ],
  };

  return (
    <>
      <h1 className='heading'>Services</h1>

      <section className="services">
       
            <Slider {...settings}>
              {images.map((image ) => {
                return(
                  <div key={image}>
                    <img src={image} alt="" />
                  </div>
                );
              }
              )}
            </Slider>

      </section>
    </>
  );
}

export default Services