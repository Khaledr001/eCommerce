/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

import {RxDotFilled} from "react-icons/rx";

function Carousel() {
  const slides = [
    {
      url: ".././public/images/carosoul/iphone15pro.png",
    },
    {
      url: "./public/images/carosoul/iwatch.png",
    },
    {
      url: "./public/images/carosoul/imac.png",
    },
    {
      url: "./public/images/carosoul/headphone.jpg",
    },
    {
      url: "./public/images/carosoul/camara.jpg",
    },
    {
      url: "./public/images/carosoul/shoes.jpg",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
      currentIndex === 0 ? setCurrentIndex(slides.length - 1) : setCurrentIndex(currentIndex- 1);
    };
    
    const nextSlide = () => {
        setCurrentIndex((currentIndex + 1) % slides.length);
    };
    
    const goToSlide = (slideIndex) => { 
        setCurrentIndex(slideIndex)
    }

  return (
    <div className=" h-[70vh] w-full pb-9 relative group">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full rounded-2xl bg-center duration-500"></div>

      {/* left icon */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 -translate-y-[50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft size={30} onClick={prevSlide} />
      </div>

      {/* right icon */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 -translate-y-[50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight size={30} onClick={nextSlide} />
          </div>
          
        {/* rx dot filled */}
          <div className="flex top-4 justify-center py-2">
              {
                  slides.map((slide, slideIndex) => (
                      <div key={slideIndex} onClick={() => {goToSlide(slideIndex)}} className="text-2xl cursor-pointer"> <RxDotFilled /> </div>
                  ))
              }
        </div>
    </div>
  );
}

export default Carousel;
