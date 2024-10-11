"use client";

import React, { useState } from "react";
import IconButton from "./IconButton";
import ButtonLink from "./ButtonLink";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import Image from "next/image";
import { useAppData } from "../contexts/appContext";
import _ from "lodash";
import { urlParser } from "../utils/functions";

const HeroCarousel = () => {
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);
  const { categories } = useAppData();
  const selectedCategory = categories[selectedCategoryIndex];

  function handleGoToNextCategory() {
    setSelectedCategoryIndex(
      (prevIndex) => (prevIndex + 1) % categories.length
    );
  }
  function handleGoToPrevCategory() {
    setSelectedCategoryIndex((prevIndex) =>
      prevIndex === 0 ? categories.length - 1 : prevIndex - 1
    );
  }

  return (
    <div className="text-center">
      <div className="flex py-8 gap-4 justify-center items-center">
        <IconButton
          onClick={handleGoToPrevCategory}
          icon={<FaChevronLeft className="text-2xl" />}
        />
        <div className="space-y-3">
          <Image
            src={`/assets/images/${selectedCategory.image}`}
            width={2000}
            height={2000}
            alt={selectedCategory.title}
            className="object-contain lg:max-w-80 mx-auto h-36"
          />
          <p className="font-bold text-lg">{selectedCategory.title}</p>
        </div>
        <IconButton
          onClick={handleGoToNextCategory}
          icon={<FaChevronRight className="text-2xl" />}
        />
      </div>

      <div className="h-[1px] bg-neutral-200 w-full"></div>
      <div className="justify-center items-center lg:gap-5 lg:flex w-fit mx-auto">
        <ButtonLink
          className="py-3 lg:py-5"
          size="base"
          text="Go to Product"
          linkDestination={`/products/${urlParser(
            selectedCategory.title
          )}/${selectedCategory.image.slice(0, -4)}`}
        />
        <div className="h-[1px] lg:h-0 bg-neutral-200 w-full"></div>
        <ButtonLink
          linkDestination={`/products/${urlParser(selectedCategory.title)}`}
          className="text-neutral-500 py-3 lg:py-5"
          size="base"
          text="Go to Category"
        />
      </div>
    </div>
  );
};

export default HeroCarousel;
