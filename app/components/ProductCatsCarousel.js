"use client";

import React from "react";
import ButtonLink from "./ButtonLink";
import Image from "next/image";
import { useAppData } from "../contexts/appContext";
import { urlParser } from "../utils/functions";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import styles from "./ProductCatsCarousel.module.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./HeroCarousel.css"; // Import custom CSS

const ProductCatsCarousel = () => {
  const { categories } = useAppData();

  return (
    <div
      className={`lg:col-span-2 text-center  rounded-lg border-opacity-5 overflow-hidden ${styles.container}`}
    >
      <div className="py-5">
        <Swiper
          modules={[Autoplay, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={true}
          className="w-full"
        >
          {categories.map((category, index) => (
            <SwiperSlide key={index}>
              <div className="space-y-3 w-2/3 mx-auto">
                <Image
                  src={`/assets/images/${category.image}`}
                  width={2000}
                  height={2000}
                  alt={category.title}
                  className="object-contain lg:max-w-80 mx-auto h-36 zoom-effect"
                />
                <p className="font-bold text-xl">{category.title}</p>
              </div>
              <div className="justify-center items-center sm:gap-5 flex-wrap gap-5 gap-y-3 flex w-fit mx-auto mt-10">
                <ButtonLink
                  className=""
                  size="small"
                  text="Go to Product"
                  href={`/products/${urlParser(
                    category.title
                  )}/${category.image.slice(0, -4)}`}
                />
                <ButtonLink
                  href={`/products/${urlParser(category.title)}`}
                  className=""
                  size="small"
                  text="Go to Category"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ProductCatsCarousel;
