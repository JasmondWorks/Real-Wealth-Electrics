"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { testimonials } from "../data/testimonials";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

export default function Testimonials() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      loop
      autoplay={{
        delay: 60000,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      slidesPerView={1}
      spaceBetween={30}
      breakpoints={{
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      }}
      className="testimonials-slider"
    >
      {testimonials.map((testimonial, index) => (
        <SwiperSlide key={index} className="flex">
          <div className="rounded-lg p-5 border border-neutral-100 bg-white flex flex-col h-full">
            <div className="flex items-center mb-4">
              {testimonial.image && (
                <Image
                  src={`/assets/images/avatar.jpg`}
                  width={500}
                  height={500}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
              )}
              <div>
                <h4 className="font-semibold">{testimonial.name}</h4>
                <p className="text-sm text-gray-600">{testimonial.position}</p>
              </div>
            </div>
            <p className="text-gray-700 flex-grow">{testimonial.quote}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
