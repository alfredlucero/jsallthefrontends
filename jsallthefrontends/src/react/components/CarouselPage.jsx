import React from "react";
import Layout from "./Layout";
import CodePreview from "./CodePreview";
import Carousel, { CarouselCode } from "./Carousel";

const CarouselPreview = () => {
  const slides = [
    {
      slideImg:
        "https://cdn.pixabay.com/photo/2019/08/19/07/45/dog-4415649_1280.jpg",
      slideText: "Corgi on railroad",
    },
    {
      slideImg:
        "https://cdn.pixabay.com/photo/2016/03/27/21/07/animal-1284286_1280.jpg",
      slideText: "Corgi walkin",
    },
    {
      slideImg:
        "https://cdn.pixabay.com/photo/2019/08/04/06/29/pets-4383143_1280.jpg",
      slideText: "Corgi on tren",
    },
    {
      slideImg:
        "https://cdn.pixabay.com/photo/2018/05/11/08/11/pet-3389729_1280.jpg",
      slideText: "Corgi hoppin",
    },
  ];
  return (
    <>
      <Carousel
        slides={slides}
        initialActiveSlide={0}
        autoNextSlideInterval={5000}
      />
    </>
  );
};

const CarouselPage = () => {
  return (
    <Layout>
      <h2 className="mb-4">Carousel</h2>
      <p className="mb-6">
        Check out some transitions and cycle through a list of images in a
        carousel.
      </p>
      <CodePreview preview={<CarouselPreview />} code={<CarouselCode />} />
    </Layout>
  );
};

export default CarouselPage;
