import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import banner1 from "../img/banner1.png";
import banner2 from "../img/banner2.png";

const ImageCarousel = () => {
  return (
    <Carousel
      autoPlay={true}
      infiniteLoop={true}
      interval={6000}
      showArrows={false}
      showThumbs={false}
    >
      <div>
        <img src={banner1} alt="Imagem 1" />
      </div>
      <div>
        <img src={banner2} alt="Imagem 2" />
      </div>
    </Carousel>
  );
};

export default ImageCarousel;