"use client";

import Link from "next/link";
import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { FaChevronRight } from "react-icons/fa6";
import SearchBox from "./SearchBox";
import BigMenu from "./BigMenu";
import { useProducts } from "../contexts/productsContext";
import Image from "next/image";
import ProductsList from "./ProductsList";
import ProductCard from "./ProductCard";
import Badge from "./Badge";

const Navbar = () => {
  const { productCategories } = useProducts();
  const categoriesList = Object.entries(productCategories);
  const [selectedCategory, setSelectedCategory] = useState(
    categoriesList[0][0]
  );
  const selectedCategoryProducts = categoriesList.find(
    (cat) => cat[0] === selectedCategory
  )[1];
  const [isBigMenuShowing, setIsBigMenuShowing] = useState(false);

  return (
    <nav className="border-b-[5px] border-primary sticky top-0 bg-white z-10 text-[.9rem]">
      <div className="container-custom flex justify-between items-center">
        <div className="text-2xl font-extrabold">RwE</div>
        <div>
          {/* <SearchBox /> */}
          <IoMenu className="text-3xl lg:hidden" />
        </div>
        <nav className="hidden lg:flex">
          <ul className="list-none flex gap-8 border-r border-neutral-200 items-center pr-5">
            <li>
              <Link href="#" className="font-bold">
                <span className="inline-block py-5">Home</span>
              </Link>
            </li>
            <li className="group">
              <Link
                href="#"
                className="font-medium py-5  text-neutral-600 flex gap-1 items-center"
              >
                <span>Products</span>
                <FaChevronRight className="text-sm" />
                <BigMenu className="group-hover:block">
                  <h3 className="font-bold text-lg mb-6">Categories</h3>
                  <div className="flex gap-10">
                    <ul className="list-none space-y-3">
                      {categoriesList.map((cat) => (
                        <Link
                          onMouseOver={() => setSelectedCategory(cat[0])}
                          key={cat[0]}
                          href="#"
                          className={`flex gap-1 items-center ${
                            selectedCategory === cat[0] ? "text-yellow-500" : ""
                          }`}
                        >
                          <FaChevronRight className="text-sm" />
                          <span>{cat[0]}</span>
                        </Link>
                      ))}
                    </ul>
                    <div className="flex-1">
                      {selectedCategory && (
                        <ProductsList className="max-h-[60vh] overflow-auto pr-2">
                          {selectedCategoryProducts.map((prod) => (
                            <ProductCard
                              key={prod.id}
                              isCategory={false}
                              body={
                                <>
                                  <Image
                                    src={`/assets/images/${prod.images[0]}`}
                                    width={2000}
                                    height={2000}
                                    alt={``}
                                    className="object-contain w-full max-w-40 mx-auto"
                                  />
                                  <Badge text={prod.id.toUpperCase()} />
                                </>
                              }
                            />
                          ))}
                        </ProductsList>
                      )}
                    </div>
                  </div>
                </BigMenu>
              </Link>
            </li>
            <li className="group">
              <Link
                href="#"
                className="font-medium py-5  text-neutral-600 flex gap-1 items-center"
              >
                <span>Use Cases</span>
                <FaChevronRight className="text-sm" />
                <BigMenu className="group-hover:block">
                  <h3 className="font-bold text-lg mb-6">Our products for your specific use</h3>
                  <div className="flex gap-10">
                    <ul className="list-none space-y-3">
                      {categoriesList.map((cat) => (
                        <Link
                          onMouseOver={() => setSelectedCategory(cat[0])}
                          key={cat[0]}
                          href="#"
                          className={`flex gap-1 items-center ${
                            selectedCategory === cat[0] ? "text-yellow-500" : ""
                          }`}
                        >
                          <FaChevronRight className="text-sm" />
                          <span>{cat[0]}</span>
                        </Link>
                      ))}
                    </ul>
                    <div className="flex-1">
                      {selectedCategory && (
                        <ProductsList className="max-h-[60vh] overflow-auto pr-2">
                          {selectedCategoryProducts.map((prod) => (
                            <ProductCard
                              key={prod.id}
                              isCategory={false}
                              body={
                                <>
                                  <Image
                                    src={`/assets/images/${prod.images[0]}`}
                                    width={2000}
                                    height={2000}
                                    alt={``}
                                    className="object-contain w-full max-w-40 mx-auto"
                                  />
                                  <Badge text={prod.id.toUpperCase()} />
                                </>
                              }
                            />
                          ))}
                        </ProductsList>
                      )}
                    </div>
                  </div>
                </BigMenu>
              </Link>
            </li>
            <li className="group">
              <Link
                href="#"
                className="font-medium py-5  text-neutral-600 flex gap-1 items-center"
              >
                <span>Case studies</span>
                <FaChevronRight className="text-sm" />
                <BigMenu className="group-hover:block">
                  <h3 className="font-bold text-lg mb-6">Case studies</h3>
                  <div className="flex gap-10">
                    <ul className="list-none space-y-3">
                      {categoriesList.map((cat) => (
                        <Link
                          onMouseOver={() => setSelectedCategory(cat[0])}
                          key={cat[0]}
                          href="#"
                          className={`flex gap-1 items-center ${
                            selectedCategory === cat[0] ? "text-yellow-500" : ""
                          }`}
                        >
                          <FaChevronRight className="text-sm" />
                          <span>{cat[0]}</span>
                        </Link>
                      ))}
                    </ul>
                    <div className="flex-1">
                      {selectedCategory && (
                        <ProductsList className="max-h-[60vh] overflow-auto pr-2">
                          {selectedCategoryProducts.map((prod) => (
                            <ProductCard
                              key={prod.id}
                              isCategory={false}
                              body={
                                <>
                                  <Image
                                    src={`/assets/images/${prod.images[0]}`}
                                    width={2000}
                                    height={2000}
                                    alt={``}
                                    className="object-contain w-full max-w-40 mx-auto"
                                  />
                                  <Badge text={prod.id.toUpperCase()} />
                                </>
                              }
                            />
                          ))}
                        </ProductsList>
                      )}
                    </div>
                  </div>
                </BigMenu>
              </Link>
            </li>
           
            <li>
              <Link href="#" className="font-medium py-5  text-neutral-600">
                <span>About Us</span>
              </Link>
            </li>
            <li onMouseOut={() => setSelectedMenuContent(null)}>
              <Link href="#" className="font-medium py-5  text-neutral-600">
                <span>Contact Us</span>
              </Link>
            </li>
          </ul>
          <SearchBox className="pl-10" />
        </nav>
      </div>
    </nav>
  );
};

export default Navbar;
