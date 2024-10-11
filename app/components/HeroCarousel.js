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
  console.log(urlParser("123 456#aaa-abcd"));
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
            className="object-contain max-w-80 mx-auto h-36"
          />
          <p className="font-bold text-lg">{selectedCategory.title}</p>
        </div>
        <IconButton
          onClick={handleGoToNextCategory}
          icon={<FaChevronRight className="text-2xl" />}
        />
      </div>
      <div className="py-4 border-t border-neutral-200 flex justify-center items-center gap-12">
        <ButtonLink
          size="base"
          text="Go to Product"
          linkDestination={`/products/${urlParser(
            selectedCategory.title
          )}/${selectedCategory.image.slice(0, -4)}`}
        />
        <ButtonLink
          linkDestination={`/products/${urlParser(selectedCategory.title)}`}
          className="text-neutral-500"
          size="base"
          text="Go to Category"
        />
      </div>
    </div>
  );
};

export default HeroCarousel;
