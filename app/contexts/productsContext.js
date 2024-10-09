"use client";

import { createContext, useContext } from "react";

const ProductsContext = createContext();

const products = [
  {
    name: "Satellite disciplined wall clock",
    id: "dsc168ss",
    category: "Digital Satellite Clocks",
    specifications: [
      "100 series",
      "6 digits",
      "8 inches",
      "super-scripted seconds",
      "60m glance-able distance",
    ],
    images: ["dsc168ss.png"],
  },
  {
    name: "Composite master time instrument",
    id: "cctm262.3",
    category: "Digital Timer-Counters",
    specifications: [
      "200 series",
      "6 digits",
      "2.3 inches",
      'Comprises a clock-counter-timer that controls a 4"',
    ],
    images: ["cctm262.3.png"],
  },
  {
    name: "",
    id: "dsc144",
    category: "Digital Satellite Clocks",
    specifications: ["100 series", "4 digits", "4 inches"],
    images: ["dsc144.png"],
  },
  {
    name: "",
    id: "dsc162.3",
    category: "Digital Satellite Clocks",
    specifications: ["100 series", "6 digits", "2.3 inches"],
    images: ["dsc162.3.png"],
  },
  {
    name: "",
    id: "dsct144",
    category: "Digital Satellite Clocks",
    specifications: [
      "100 series",
      "6 digits",
      "8 inches",
      "30m glance-able distance",
      "2-face",
    ],
    images: ["dsct144.png"],
  },
  {
    name: "",
    id: "fcctm262.3",
    category: "Full Calendar Clocks",
    specifications: [
      "200 series",
      "6 digits",
      "2.3 inches",
      "LED matrix display",
    ],
    images: ["fcctm262.3.png"],
  },
  {
    name: "Single line full calendar satellite disciplined text clock",
    id: "slc16",
    category: "Full Calendar Clocks",
    specifications: ["LED matrix display"],
    images: ["slc16.png"],
  },
  {
    name: "",
    id: "m64h4",
    category: "World-Time Multizone Clocks",
    specifications: [
      "6 digits",
      "4 inches",
      "Horizontal orientation",
      "Four cities",
    ],
    images: ["m64h4.png"],
  },
  {
    name: "",
    id: "m64h412",
    category: "World-Time Multizone Clocks",
    specifications: [
      "100 series",
      "6 digits",
      "8 inches",
      "Horizontal orientation",
      "12 hour",
      "Four cities",
    ],
    images: ["m64h412.png"],
  },
  {
    name: "",
    id: "mf2.3v8",
    category: "World-Time Multizone Clocks",
    specifications: [
      "100 series",
      "6 digits",
      "2.3 inches",
      "Vertical orientation",
    ],
    images: ["mf2.3v8.jpg"],
  },
];
export function ProductsProvider({ children }) {
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
