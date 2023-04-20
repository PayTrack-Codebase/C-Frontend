import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const QrCarousel = ({ data }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {data.map((item) => (
        <div key={item.id}>
          <img src={item.image} alt={item.title} />
          <h3>{item.name}</h3>
          <p>{item.occupation}</p>
          <p>{item.description}</p>
        </div>
      ))}
    </Slider>
  );
};

export default QrCarousel;
