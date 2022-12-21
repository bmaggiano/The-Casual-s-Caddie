import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
import azgolf from '../images/azgolf.png'
import toptracer from '../images/tracer.webp'

import "../App.css";

// import required modules
import { Pagination } from "swiper";

export default function Carousel() {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: false,
        }}
        modules={[Pagination]}
        style={{
            "--swiper-pagination-color": "darkgreen"
        }}
        className="h-48 rounded-md"
      >
        <SwiperSlide>
            <img src={toptracer} className="rounded-md"/>
            <br/>
            <p className="text-sm mx-2">Hit 5 shots at any driving range with TopTracer to get an average distance for any given club.</p>

        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
      </Swiper>
    </>
  );
}