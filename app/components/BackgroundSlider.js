"use client";

import styles from "./BackgroundSlider.module.css";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useAppData } from "../contexts/appContext";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const BackgroundSlider = () => {
  const { useCases } = useAppData();

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      loop
      autoplay={{
        delay: 6000,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      className={`w-full rounded-3xl overflow-hidden px-5 ${styles.sliderContainer} container-custom--sm`}
    >
      {useCases.map((useCase, index) => (
        <SwiperSlide key={index} style={{ height: "unset" }}>
          <div className="aspect-square sm:aspect-video">
            <div className="w-full h-full flex flex-col justify-end items-center">
              <div
                style={{
                  backgroundImage: `url(/assets/images/industries/${useCase.image})`,
                  backgroundPosition: "center center",
                  backgroundSize: "cover", // Ensure the image covers the container
                }}
                className="absolute inset-0 w-full h-full"
              />
              <div
                className="absolute inset-0 w-full h-full"
                style={{
                  background: `linear-gradient(to top, 
                    rgba(0, 0, 0, 0.9) 35%, 
                    rgba(0, 0, 0, 0.7) 50%, 
                    rgba(0, 0, 0, 0.4) 70%, 
                    rgba(0, 0, 0, 0.1) 90%, 
                    rgba(0, 0, 0, 0) 100%)`,
                }}
              ></div>
              <div className="relative w-full max-w-2xl mx-auto py-16 px-10">
                <div className="text-white text-center">
                  <h4 className="font-bold mb-5 leading-tight text-lg md:text-2xl">
                    {useCase.title}
                  </h4>
                  <p className="opacity-85 md:block text-base md:text-base !leading-loose">
                    {useCase.shortSummary}
                  </p>
                  {/* <ButtonLink
                    className="text-yellow-400 mt-10"
                    text="Explore Applications for Your Industry"
                    isLink
                    href={`/usecases/${urlParser(useCase.title)}`}
                  /> */}
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default BackgroundSlider;
