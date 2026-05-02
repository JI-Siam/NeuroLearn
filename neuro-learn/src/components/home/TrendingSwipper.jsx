"use client";

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';
const TrendingSwipper = ({courses}) => {
    return (
        <div>
          <Swiper
        slidesPerView={2}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
       
        {courses.map(crs =>  <SwiperSlide key={crs.id} ><img src={crs.image} alt="" /></SwiperSlide>)}
  
      </Swiper>
        </div>
    );
};

export default TrendingSwipper;