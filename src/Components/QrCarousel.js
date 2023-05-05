import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Style/carousel.css";

const QrCarousel = ({ data }) => {
  const [slidesToShow, setSlidesToShow] = useState(3);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow,
    slidesToScroll: 1,
  };

  useEffect(() => {
    const updateSlidesToShow = () => {
      if (window.innerWidth <= 768) {
        setSlidesToShow(1);
      } else {
        setSlidesToShow(3);
      }
    };

    window.addEventListener("resize", updateSlidesToShow);

    // Call the function once on mount to set the initial state
    updateSlidesToShow();

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", updateSlidesToShow);
    };
  }, []);

  return (
    <div className="carousel-main">
      <h1 className="carousel-heading">Customer's Reviews</h1>
      <div className="carousel-divs">
        <Slider {...settings}>
          {data.map((item) => (
            <div className="div-item" key={item.id}>
              <div className="item-flex">
                <img className="item-img" src={item.image} alt={item.title} />
                <div>
                  <h2>{item.name}</h2>
                  <p>{item.occupation}</p>
                  <p>{item.location}</p>
                </div>
              </div>
              <p className="desc">{item.description}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default QrCarousel;
