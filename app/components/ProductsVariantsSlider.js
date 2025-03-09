"use client";

import styles from "./ProductsVariantsSlider.module.css";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useAppData } from "../contexts/appContext";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ProductsVariantsSlider = () => {
  const { useCases } = useAppData();

  return (
    <div className="max-w-[50rem] mx-auto">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        loop
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        className={`w-full md:rounded-3xl overflow-hidden px-5 ${styles.sliderContainer}`}
      >
        {useCases.map((useCase, index) => (
          <SwiperSlide key={index} style={{ height: "unset" }}>
            <div className="p-10 py-20 lg:py-32 h-full">
              <div className="w-full h-full">
                <div
                  style={{
                    backgroundImage: `url(/assets/images/industries/${useCase.image})`,
                    backgroundPosition: "center center",
                    backgroundSize: "cover", // Ensure the image covers the container
                  }}
                  className="absolute inset-0 w-full h-full"
                />
                <div className="absolute inset-0 w-full h-full bg-black bg-opacity-50"></div>
                <div className="relative w-full h-full max-w-2xl mx-auto flex flex-col items-center justify-center">
                  <div className="bg-black bg-opacity-50 px-5 py-8 text-white rounded-lg">
                    <h3 className="font-bold mb-5 leading-tight">
                      {useCase.title}
                    </h3>
                    <p className="text-sm">{useCase.shortSummary}</p>
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
    </div>
  );
};

export default ProductsVariantsSlider;
