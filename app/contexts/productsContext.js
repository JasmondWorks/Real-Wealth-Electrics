"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { products as productsArray } from "../data";

const ProductsContext = createContext();

export function ProductsProvider({ children }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(productsArray);
  }, []);

  const productCategories = products.reduce((acc, product) => {
    const { category } = product;

    // If the category does not exist in the accumulator, create it as an array
    if (!acc[category]) {
      acc[category] = [];
    }

    // Push the current product into the corresponding category array
    acc[category].push(product);

    return acc;
  }, {});

  return (
    <ProductsContext.Provider value={{ products, productCategories }}>
      {children}
    </ProductsContext.Provider>
  );
}

export function useProducts() {
  const context = useContext(ProductsContext);

  if (context === undefined)
    throw new Error("You tried to access context outside products provider");

  return context;
}
