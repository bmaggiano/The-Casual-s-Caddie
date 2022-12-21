import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
import azgolf from '../images/azgolf.png'
import toptracer from '../images/tracer.webp'
import profile from '../images/profile.webp'
import golfbag from '../images/golfbag.jpg'

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
        className="py-3 rounded-md"
      >
        <SwiperSlide>
        <img src={profile} className="rounded-md w-fluid"/>
            <h5 className="font-bold pt-2">Step 1: </h5>
            <p className="text-sm mx-2">Login or create an account. It's literally free and your golf game will thank you one day!</p>
        </SwiperSlide>
        <SwiperSlide><img src={golfbag} className="rounded-md w-fluid"/>
            <h5 className="font-bold pt-2">Step 2: </h5>
            <p className="text-sm mx-2">Add clubs to your virtual bag.</p></SwiperSlide>
        <SwiperSlide>
            <img src={toptracer} className="rounded-md w-fluid"/>
            <h5 className="font-bold pt-2">Step 3: </h5>
            <p className="text-sm mx-2">Hit 5 shots at any driving range with TopTracer to get an average distance for any given club.</p>
        </SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
      </Swiper>
    </>
  );
}