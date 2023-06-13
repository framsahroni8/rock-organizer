import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./Slider.scss";

type ImageCarouselProps = {
  images: string[];
};

export const SliderDetail: React.FC<ImageCarouselProps> = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <Slider {...settings} className="slider">
        {images.map((image, index) => (
          <div key={index} className="carouselWrapper">
            <img src={image} alt={`Slide ${index}`} className="imageCarousel" />
          </div>
        ))}
      </Slider>
    </>
  );
};
