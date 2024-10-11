"use client";

import React from "react";
import Badge from "./Badge";
import Image from "next/image";
import ProductCard from "./ProductCard";
import ProductsList from "./ProductsList";
import { useProducts } from "../contexts/productsContext";
import { useAppData } from "../contexts/appContext";
import _ from "lodash";
import { urlParser } from "../utils/functions";

const ProductCategoriesList = () => {
  const { products } = useProducts();
  const { categories: allCategories } = useAppData();

  const categories = allCategories.map((cat) => {
    const productsArray = [];
    products.forEach((product) => {
      if (product.category === cat.title) productsArray.push(product);
    });

    return { ...cat, products: productsArray };
  });

  return (
    <div id="productsCategories">
      <ProductsList>
        {categories.map((cat) => (
          <ProductCard
            title={cat.title}
            key={cat.id}
            product={cat.products[0]}
            linkDestination={`/products/${urlParser(cat.title)}`}
          />
        ))}
      </ProductsList>
    </div>
  );
};

export default ProductCategoriesList;
