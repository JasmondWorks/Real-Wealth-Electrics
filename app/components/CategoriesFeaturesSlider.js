"use client";

import React, { useState } from "react";
import { useProducts } from "../contexts/productsContext";
import Tabs from "./Tabs";
import ProductCard from "./ProductCard";
import Image from "next/image";
import Badge from "./Badge";
import { useAppData } from "../contexts/appContext";
import Link from "next/link";
import ButtonLink from "./ButtonLink";

const categoryFeatures = [
  {
    category: "Digital Timer-Counters",
  },
  {
    category: "Multizone World Time Clocks",
  },
  {
    category: "Full Calendar Clocks",
  },
  {
    category: "Digital Satellite Clocks",
  },
];

const CategoriesFeaturesSlider = () => {
  const { productCategories, products } = useProducts();
  const { categories: allCategories } = useAppData();

  const categories = allCategories.map((cat) => {
    const productsArray = [];
    products.forEach((product) => {
      if (product.category === cat.title) productsArray.push(product);
    });

    return { ...cat, products: productsArray };
  });

  const [selectedCategory, setSelectedCategory] = useState(0);

  function handleSelectCategory(category) {
    setSelectedCategory(categories.findIndex((cat) => cat.title === category));
  }

  return (
    <div className="container-custom--sm">
      <h3 className="mt-36 mb-14 text-center font-bold text-2xl">
        According to category
      </h3>
      <div>
        <Tabs
          buttonsTextArray={categories.map((cat) => cat.title)}
          // secondaryText="All Categories"
          onSelectTab={handleSelectCategory}
        />
      </div>
      <div className="mt-8">
        <h4 className="mb-16 p-4 border border-primary bg-primaryLight font-bold text-lg">
          {categories[selectedCategory].title}
        </h4>
        <div className="grid gap-12 lg:grid-cols-6">
          <ProductCard
            isCategory={true}
            className="lg:col-span-2 self-start"
            body={
              <>
                <Image
                  src={`/assets/images/${categories[selectedCategory].products[0].images[0]}`}
                  width={2000}
                  height={2000}
                  alt="product category"
                  className="object-contain w-full max-w-40 mx-auto"
                />
                <Badge
                  text={categories[
                    selectedCategory
                  ].products[0].id.toUpperCase()}
                />
              </>
            }
            linkDestination={`/products/${categories[selectedCategory].title}/${categories[selectedCategory].products[0].id}`}
          />
          <div className="lg:col-span-4 flex flex-col gap-7">
            {categories[selectedCategory].features.map((feature) => (
              <div className="space-y-3" key={feature.title}>
                <p className="font-bold leading-4">{feature.title}</p>
                <p>{feature.description}</p>
              </div>
            ))}
            <ButtonLink
            className="mt-3 border border-neutral-300 px-4 py-2 leading-4 w-fit"
              text="View more"
              isLink
              linkDestination={`/products/${categories[selectedCategory].title}__${categories[selectedCategory].id}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoriesFeaturesSlider;
