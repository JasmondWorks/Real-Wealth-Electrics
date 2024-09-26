"use client";

import React from "react";
import { useProducts } from "../../contexts/productsContext";

const Categories = ({ params: { category } }) => {
  const { products } = useProducts();

  return (
    <div>
      Categories
      
      {category}
    </div>
  );
};

export default Categories;
