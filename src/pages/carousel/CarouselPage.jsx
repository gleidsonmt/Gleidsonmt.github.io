import React, { useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

import "./carousel.css";

import { slides } from "../../carousel.json";

import global from "../../Global";

export const CarouselPage = () => {
  const [slide, setSlide] = useState(0);

  // if (window.location.host.includes("localhost")) {
  //   global.assets = "";
  // }

  const nextSlide = () => {
    setSlide(slide == slides.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? slide.length - 1 : slide - 1);
  };

  return (
    <div className="flex flex-col justify-center align-center place-items-center">
      <div className="carousel  max-h-[900px] max-w-[1200px] my-20 mx-20">
        <AiOutlineArrowLeft className="arrow arrow-left" onClick={prevSlide} />
        {slides.map((item, index) => {
          return (
            <img
              src={global.assets + item.src}
              alt={item.alt}
              key={index}
              className={slide === index ? "slide  " : "slide slide-hidden"}
            />
          );
        })}
        <AiOutlineArrowRight
          className="arrow arrow-right "
          onClick={nextSlide}
        />
        <span className="indicators p-20">
          {slides.map((_, index) => {
            return (
              <button
                key={index}
                onClick={() => setSlide(index)}
                className={
                  slide === index ? "indicator" : "indicator indicator-inactive"
                }
              ></button>
            );
          })}
        </span>
      </div>
    </div>
  );
};

export default CarouselPage;
