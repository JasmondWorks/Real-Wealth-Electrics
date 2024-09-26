"use client";

import React from "react";
import Badge from "./Badge";
import Image from "next/image";
import ProductCard from "./ProductCard";
import ProductsList from "./ProductsList";
import { useProducts } from "../contexts/productsContext";

const ProductCategoriesList = () => {
  const { productCategories } = useProducts();

  return (
    <ProductsList>
      {Object.keys(productCategories).map((catName) => (
        <ProductCard
          title={catName}
          key={catName}
          product={productCategories[catName][0]}
        />
      ))}
    </ProductsList>
  );
};

export default ProductCategoriesList;
