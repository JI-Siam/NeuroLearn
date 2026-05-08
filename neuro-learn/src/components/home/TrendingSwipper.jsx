"use client";

import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, EffectCoverflow } from 'swiper/modules';
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';

const TrendingSwipper = ({ courses }) => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    return (
        <div className="relative">
            <style>{`
                .trending-swiper .swiper-pagination-bullet {
                    background-color: rgba(79, 140, 255, 0.4);
                    opacity: 1;
                    transition: all 0.3s ease;
                }
                .trending-swiper .swiper-pagination-bullet-active {
                    background-color: rgb(79, 140, 255);
                    width: 32px;
                    border-radius: 10px;
                }
                .trending-swiper .swiper-slide img {
                    border-radius: 20px;
                    object-fit: cover;
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
                    transition: all 0.3s ease;
                }
                .trending-swiper .swiper-slide-active img {
                    box-shadow: 0 20px 50px rgba(79, 140, 255, 0.3);
                    transform: scale(1.02);
                }
            `}</style>

            <Swiper
                effect="coverflow"
                grabCursor={true}
                centeredSlides={true}
                slidesPerView="auto"
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: false,
                }}
                pagination={{
                    el: '.trending-swiper-pagination',
                    clickable: true,
                    dynamicBullets: true,
                }}
               
                modules={[EffectCoverflow, Pagination, Navigation]}
                className="trending-swiper w-full"
               
            >
                {courses.map((course) => (
                    <SwiperSlide key={course.id} className="w-80 h-96">
                        <div className="relative w-full h-full rounded-3xl overflow-hidden group">
                            <img
                                src={course.image}
                                alt={course.title}
                                className="w-full h-full"
                            />
                            {/* Overlay gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            
                            {/* Title overlay */}
                            <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div>
                                    <h3 className="text-white font-bold text-lg mb-2 line-clamp-2">
                                        {course.title}
                                    </h3>
                                    <p className="text-white/80 text-sm">
                                        {course.instructor}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Navigation Buttons */}
            <button
                ref={prevRef}
                className="absolute -left-16 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-[#151C2F] border border-[#253150] flex items-center justify-center text-[#4F8CFF] hover:bg-[#1F2D45] hover:border-[#4F8CFF] transition-all duration-300"
            >
                <IoChevronBack className="w-6 h-6" />
            </button>

            <button
                ref={nextRef}
                className="absolute -right-16 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-[#151C2F] border border-[#253150] flex items-center justify-center text-[#4F8CFF] hover:bg-[#1F2D45] hover:border-[#4F8CFF] transition-all duration-300"
            >
                <IoChevronForward className="w-6 h-6" />
            </button>

            {/* Pagination */}
            <div className="trending-swiper-pagination flex justify-center gap-2 mt-8" />
        </div>
    );
};

export default TrendingSwipper;