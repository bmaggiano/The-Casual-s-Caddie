import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
import slide2 from '../images/slide2.png'
import toptracer from '../images/tracer.webp'
import slide3 from '../images/slide3.png'
import slide1 from '../images/slide1.png'
import slide4 from '../images/slide4.png'
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
        <img src={slide1} className="rounded-md w-fluid"/>
            <h5 className="font-bold pt-2">Step 1: </h5>
            <p className="text-sm mx-2">Login or create an account. It's literally free and your golf game will thank you one day!</p>
        </SwiperSlide>
        <SwiperSlide><img src={slide2} className="rounded-md w-fluid"/>
            <h5 className="font-bold pt-2">Step 2: </h5>
            <p className="text-sm mx-2">Add clubs to your virtual bag from your profile page.</p></SwiperSlide>
        <SwiperSlide>
            <img src={slide3} className="rounded-md w-fluid"/>
            <h5 className="font-bold pt-2">Step 3: </h5>
            <p className="text-sm mx-2">Head to any driving range with TopTracer technology and get ready to hit some balls.</p>
        </SwiperSlide>
        <SwiperSlide>
        <img src={slide4} className="rounded-md w-fluid"/>
            <h5 className="font-bold pt-2">Step 4: </h5>
            <p className="text-sm mx-2">Select the club that you want to calibrate or recalibrate, then record the distances from your 5 swings.</p>
        </SwiperSlide>
        <SwiperSlide>
        <img src={slide4} className="rounded-md w-fluid"/>
            <h5 className="font-bold pt-2">Step 5: </h5>
            <p className="text-sm mx-2">Click the "Calculate" button to get a low, high, and average distance. Then click "Update Club" to have those stats saved to your profile.</p>
        </SwiperSlide>
        <SwiperSlide>
        <img src={slide4} className="rounded-md w-fluid"/>
            <h5 className="font-bold pt-2">Step 6: </h5>
            <p className="text-sm mx-2">Never second guess your distances again and enjoy the game of golf!</p>
        </SwiperSlide>
      </Swiper>
    </>
  );
}