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
import _ from "lodash";
import { urlParser } from "../utils/functions";

const CategoriesFeaturesSlider = () => {
  const { products } = useProducts();

  const { categories: allCategories } = useAppData();

  const categories = allCategories.map((cat) => {
    const productsArray = [];

    products.forEach((product) => {
      if (product.category === cat.title) productsArray.push(product);
    });

    return { ...cat, products: productsArray };
  });

  const [selectedCategory, setSelectedCategory] = useState(categories[0].title);
  const category = categories.find((cat) => cat.title === selectedCategory);

  function handleSelectCategory(category) {
    // setSelectedCategory(categories.findIndex((cat) => cat.title === category));
    setSelectedCategory(category);
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
          {category.title}
        </h4>
        <div className="grid gap-12 lg:grid-cols-6">
          <ProductCard
            isCategory={true}
            className="lg:col-span-2 self-start"
            body={
              <>
                <Image
                  src={`/assets/images/${category.products[0]?.images[0]}`}
                  width={2000}
                  height={2000}
                  alt="product category"
                  className="object-contain w-full max-w-40 mx-auto"
                />
                <Badge text={category.products[0]?.id.toUpperCase()} />
              </>
            }
            linkDestination={`/products/${urlParser(category.title)}/${
              category.products[0]?.id
            }`}
          />
          <div className="lg:col-span-4 flex flex-col gap-7">
            {category.features.map((feature) => (
              <div className="space-y-3" key={feature.title}>
                <p className="font-bold leading-4">{feature.title}</p>
                <p>{feature.description}</p>
              </div>
            ))}
            <ButtonLink
              className="mt-3 border border-neutral-300 px-4 py-2 leading-4 w-fit"
              text="View more"
              isLink
              linkDestination={`/products/${urlParser(category.title)}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoriesFeaturesSlider;
