"use client";

import React, { useState, useEffect, useReducer } from "react";
import Link from "next/link";
import { IoMenu } from "react-icons/io5";
import Dropdown from "./Dropdown";
import BigMenu from "./BigMenu";
import { useProducts } from "../contexts/productsContext";
import { usePathname } from "next/navigation";
import { useAppData } from "@/app/contexts/appContext";
import { urlParser } from "@/app/utils/functions";

const initialState = {
  selectedCategory: null,
  selectedUseCaseTitle: null,
  selectedCaseStudy: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "category/select":
      return { ...state, selectedCategory: action.payload };
    case "caseStudy/select":
      return { ...state, selectedCaseStudy: action.payload };
    case "useCase/select":
      return { ...state, selectedUseCaseTitle: action.payload };
    default:
      return state;
  }
}

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { productCategories } = useProducts();
  const categoriesList = Object.entries(productCategories);
  const [{ selectedCategory }, dispatch] = useReducer(reducer, initialState);
  const darkPageHeroes = ["/"];

  const { products } = useProducts();
  const { categories: allCategories } = useAppData();

  const categories = allCategories.map((cat) => {
    const productsArray = [];

    products.forEach((product) => {
      if (product.category === cat.title) productsArray.push(product);
    });

    return { ...cat, products: productsArray };
  });

  console.log(categories);

  const pathname = usePathname();

  // close nav when navigating to a new page

  useEffect(() => {
    setIsNavOpen(false);
    console.log(pathname);
  }, [pathname]);

  // console.log(pathname.split("/")[1]);

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-[1000000] transition-all duration-300 text-base ${
        !isScrolled && darkPageHeroes.includes(pathname) ? "lg:py-2" : ""
      } ${
        isScrolled || isNavOpen
          ? "bg-white text-black shadow-md"
          : `bg-transparent ${
              darkPageHeroes.includes(pathname) ? "text-white" : ""
            }`
      }`}
    >
      <div
        className={`container-custom lg:flex justify-between items-center relative z-10 ${
          isNavOpen ? "bg-white" : ""
        }`}
      >
        <div className="flex justify-between items-center">
          <Link
            href="/"
            className={`${
              !isScrolled ? "py-6" : "py-4"
            } text-2xl inline-block font-extrabold transition-all duration-300`}
          >
            RwE
          </Link>
          <button
            className="outline-none focus-visible:ring-1 ring-yellow-400  border-none rounded-md"
            onClick={() => setIsNavOpen((cur) => !cur)}
          >
            <IoMenu className="text-4xl lg:hidden" />
          </button>
        </div>
        <nav className={`overflow-auto lg:flex ${!isNavOpen ? "hidden" : ""}`}>
          <ul className="list-none lg:flex items-center gap-y-2 mt-6 lg:mt-0">
            <li>
              <Link href="/" className="block py-4 lg:py-5 lg:px-5">
                <span className="inline-block">Home</span>
              </Link>
            </li>
            <li className="border-t lg:border-t-0 border-neutral-200 group">
              <Dropdown
                itemsText={categories.map((cat) => cat.title)}
                text="Products"
                className="lg:px-5"
              />
              <BigMenu className="lg:group-hover:block group-hover:text-black">
                <h3 className="font-bold text-lg mb-6">Categories</h3>
                <div className="flex gap-10">
                  <ul className="list-none space-y-3">
                    {categories.map((cat) => (
                      <Link
                        // onMouseOver={() =>
                        //   dispatch({ type: "category/select", payload: cat[0] })
                        // }
                        key={cat.id}
                        href={`/products/${urlParser(cat.title)}`}
                        className={`flex gap-1 items-center ${
                          selectedCategory === cat[0] ? "text-yellow-500" : ""
                        }`}
                      >
                        {cat.title}
                      </Link>
                    ))}
                  </ul>
                </div>
              </BigMenu>
            </li>
            <li className="border-t lg:border-t-0 border-neutral-200 group">
              <Link
                href="#footer"
                className="block font-medium py-4 lg:py-5 lg:px-5"
              >
                <span>About Us</span>
              </Link>
            </li>
            <li className="border-t lg:border-t-0 border-neutral-200 group">
              <Link
                href="#footer"
                className="block font-medium py-4 lg:py-5 lg:pl-5"
              >
                <span>Contact Us</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      {/* Overlay */}
      {isNavOpen && (
        <div
          onClick={() => setIsNavOpen(false)}
          className="bg-black bg-opacity-60 fixed inset-0 -z-10"
        ></div>
      )}
    </div>
  );
};

export default Navbar;
