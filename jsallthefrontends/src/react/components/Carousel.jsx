import React, { useState, useEffect } from "react";
import Code from "./Code";

const Carousel = ({
  // Slides look like [{ slideImg: "", slideText: "" }, ...]
  slides = [],
  initialActiveSlide = 0,
  autoNextSlideInterval = 5000,
}) => {
  const [activeSlide, setActiveSlide] = useState(initialActiveSlide);
  const [autoNextSlideTimer, setAutoNextSlideTimer] = useState(null);

  const startAutoNextSlideTimer = () => {
    const newAutoNextSlideTimer = setTimeout(nextSlide, autoNextSlideInterval);
    setAutoNextSlideTimer(newAutoNextSlideTimer);
  };

  const resetAutoNextSlideTimer = () => {
    clearTimeout(autoNextSlideTimer);
    setAutoNextSlideTimer(null);
  };

  const nextSlide = () => {
    let newActiveSlide = activeSlide + 1;

    newActiveSlide = newActiveSlide >= slides.length ? 0 : newActiveSlide;
    setActiveSlide(newActiveSlide);
    resetAutoNextSlideTimer();
  };

  const prevSlide = () => {
    let newActiveSlide = activeSlide - 1;

    newActiveSlide = newActiveSlide < 0 ? slides.length - 1 : newActiveSlide;
    setActiveSlide(newActiveSlide);
    resetAutoNextSlideTimer();
  };

  useEffect(() => {
    if (autoNextSlideTimer === null) {
      startAutoNextSlideTimer();
    }

    return () => clearTimeout(autoNextSlideTimer);
  }, [autoNextSlideTimer]);

  const currentActiveSlide = slides[activeSlide];
  const currentSlideImg = currentActiveSlide.slideImg;
  const currentSlideText = currentActiveSlide.slideText;
  const currentSlideImgAltText = `Image of ${currentActiveSlide.slideText}`;

  return (
    <div className="flex flex-row justify-center items-center">
      <div className="mx-2">
        <button
          className="flex justify-center items-center mx-4 bg-white rounded-md shadow-md h-12 w-12 text-2xl text-indigo-600 hover:text-indigo-800 focus:text-indigo-800 focus:outline-none focus:shadow-outline"
          type="button"
          onClick={prevSlide}
        >
          <i className="fas fa-arrow-left"></i>
        </button>
      </div>

      {/* Compared to other frontend libs, React doesn't have built in CSS transition/animation components to help out
          We could install and use react-transition-group to achieve a similar fade in and slide effect but we'll leave it out to highlight the difference
       */}
      <div className="flex flex-col shadow-md">
        <img
          src={currentSlideImg}
          className="w-56 h-56 object-fit rounded-t-md"
          alt={currentSlideImgAltText}
        />
        <div className="p-4 text-indigo-600 rounded-b-md bg-white text-center">
          {currentSlideText}
        </div>
      </div>

      <div className="mx-2">
        <button
          className="flex justify-center items-center mx-4 bg-white rounded-md shadow-md h-12 w-12 text-2xl text-indigo-600 hover:text-indigo-800 focus:text-indigo-800 focus:outline-none focus:shadow-outline"
          type="button"
          onClick={nextSlide}
        >
          <i className="fas fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
};

const carouselCode = `const Carousel = ({
  // Slides look like [{ slideImg: "", slideText: "" }, ...]
  slides = [],
  initialActiveSlide = 0,
  autoNextSlideInterval = 5000,
}) => {
  const [activeSlide, setActiveSlide] = useState(initialActiveSlide);
  const [autoNextSlideTimer, setAutoNextSlideTimer] = useState(null);

  const startAutoNextSlideTimer = () => {
    const newAutoNextSlideTimer = setTimeout(nextSlide, autoNextSlideInterval);
    setAutoNextSlideTimer(newAutoNextSlideTimer);
  };

  const resetAutoNextSlideTimer = () => {
    clearTimeout(autoNextSlideTimer);
    setAutoNextSlideTimer(null);
  };

  const nextSlide = () => {
    let newActiveSlide = activeSlide + 1;

    newActiveSlide = newActiveSlide >= slides.length ? 0 : newActiveSlide;
    setActiveSlide(newActiveSlide);
    resetAutoNextSlideTimer();
  };

  const prevSlide = () => {
    let newActiveSlide = activeSlide - 1;

    newActiveSlide = newActiveSlide < 0 ? slides.length - 1 : newActiveSlide;
    setActiveSlide(newActiveSlide);
    resetAutoNextSlideTimer();
  };

  useEffect(() => {
    if (autoNextSlideTimer === null) {
      startAutoNextSlideTimer();
    }

    return () => clearTimeout(autoNextSlideTimer);
  }, [autoNextSlideTimer]);

  const currentActiveSlide = slides[activeSlide];
  const currentSlideImg = currentActiveSlide.slideImg;
  const currentSlideText = currentActiveSlide.slideText;
  const currentSlideImgAltText = \`Image of $\{currentActiveSlide.slideText\}\`;

  return (
    <div className="flex flex-row justify-center items-center">
      <div className="mx-2">
        <button
          className="flex justify-center items-center mx-4 bg-white rounded-md shadow-md h-12 w-12 text-2xl text-indigo-600 hover:text-indigo-800 focus:text-indigo-800 focus:outline-none focus:shadow-outline"
          type="button"
          onClick={prevSlide}
        >
          <i className="fas fa-arrow-left"></i>
        </button>
      </div>

      {/* Compared to other frontend libs, React doesn't have built in CSS transition/animation components to help out
          We could install and use react-transition-group to achieve a similar fade in and slide effect but we'll leave it out to highlight the difference
       */}
      <div className="flex flex-col shadow-md">
        <img
          src={currentSlideImg}
          className="w-56 h-56 object-fit rounded-t-md"
          alt={currentSlideImgAltText}
        />
        <div className="p-4 text-indigo-600 rounded-b-md bg-white text-center">
          {currentSlideText}
        </div>
      </div>

      <div className="mx-2">
        <button
          className="flex justify-center items-center mx-4 bg-white rounded-md shadow-md h-12 w-12 text-2xl text-indigo-600 hover:text-indigo-800 focus:text-indigo-800 focus:outline-none focus:shadow-outline"
          type="button"
          onClick={nextSlide}
        >
          <i className="fas fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
};`;

export const CarouselCode = () => {
  return <Code code={carouselCode} language="javascript" />;
};

export default Carousel;
