"use client";

import { createContext, useContext } from "react";
import { categories as allCategories, products, useCases } from "../data";

const AppDataContext = createContext();

export function AppDataProvider({ children }) {
  const categories = allCategories.map((cat) => {
    const productsArray = [];

    products.forEach((product) => {
      if (product.category === cat.title) productsArray.push(product);
    });

    return { ...cat, products: productsArray };
  });
  return (
    <AppDataContext.Provider value={{ useCases, categories }}>
      {children}
    </AppDataContext.Provider>
  );
}

export function useAppData() {
  const context = useContext(AppDataContext);

  if (context === undefined)
    throw new Error("You tried to access context outside app provider");

  return context;
}
