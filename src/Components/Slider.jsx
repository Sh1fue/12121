import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Slider.css';

import svg1 from '../assets/logo/logo1.svg';
import svg2 from '../assets/logo/logo2.svg';
import svg3 from '../assets/logo/logo3.svg';
import svg4 from '../assets/logo/logo4.svg';
import svg5 from '../assets/logo/logo4.svg';
import svg6 from '../assets/logo/logo3.svg';
import svg7 from '../assets/logo/logo2.svg';
import svg8 from '../assets/logo/logo1.svg';
import svg9 from '../assets/logo/logo2.svg';
import svg10 from '../assets/logo/logo3.svg';

const SliderComponent = () => {
  const svgs = [svg1, svg2, svg3, svg4, svg5, svg6, svg7, svg8, svg9, svg10];

  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,

    cssEase: "linear",
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {svgs.map((svg, index) => (
          <div key={index} className="svg-slide">
            <img src={svg} alt={`SVG ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderComponent;
