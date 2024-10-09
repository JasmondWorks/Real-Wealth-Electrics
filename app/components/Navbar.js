"use client";

import Link from "next/link";
import React, { useReducer, useState } from "react";
import { IoMenu } from "react-icons/io5";
import { FaChevronDown, FaChevronRight } from "react-icons/fa6";
import SearchBox from "./SearchBox";
import BigMenu from "./BigMenu";
import { useProducts } from "../contexts/productsContext";
import Image from "next/image";
import ProductsList from "./ProductsList";
import ProductCard from "./ProductCard";
import Badge from "./Badge";
import { useAppData } from "../contexts/appContext";
import Dropdown from "./Dropdown";
import ButtonLink from "./ButtonLink";

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
function selectCategory(category) {
  return { type: "category/select", payload: category };
}
function selectCaseStudy(caseStudy) {
  return { type: "caseStudy/select", payload: caseStudy };
}
function selectUseCase(useCase) {
  return { type: "useCase/select", payload: useCase };
}

const dropdownData = [{ name: "products", baseUrl: "/products/" }];

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const { productCategories } = useProducts();
  const { useCases } = useAppData();
  const categoriesList = Object.entries(productCategories);
  const [
    { selectedCaseStudy, selectedCategory, selectedUseCaseTitle },
    dispatch,
  ] = useReducer(reducer, initialState);
  const selectedUseCase = useCases.find(
    (useCase) => useCase.title === selectedUseCaseTitle
  );

  const selectedCategoryProducts =
    selectedCategory &&
    categoriesList.find((cat) => cat[0] === selectedCategory)[1];

  return (
    <div className=" lg:py-0 sticky top-0 bg-white z-10 text-[.9rem] lg:border-primary lg:border-b-[5px]">
      <div className="py-4 lg:py-0 border-b-[5px] lg:border-0 border-primary bg-white container-custom lg:flex justify-between items-center">
        <div className="flex justify-between">
          <div className="text-2xl font-extrabold">RwE</div>
          <div className="flex">
            {/* <SearchBox /> */}
            <IoMenu
              onClick={() => setIsNavOpen((cur) => !cur)}
              className="text-3xl lg:hidden cursor-pointer"
            />
          </div>
        </div>
        <nav
          className={`overflow-auto max-h-96 lg:flex ${
            !isNavOpen ? "hidden" : ""
          }`}
        >
          <ul className="list-none lg:flex gap-x-8 items-center pr-5 gap-y-2 mt-6 lg:mt-0">
            <li>
              <Link href="#" className="font-bold">
                <span className="inline-block py-2 lg:py-5">Home</span>
              </Link>
            </li>
            <li className="border-t lg:border-t-0 border-neutral-200 group">
              <Dropdown
                itemsText={categoriesList.map((cat) => cat[0])}
                text="Products"
              />
              <BigMenu className="lg:group-hover:block">
                <h3 className="font-bold text-lg mb-6">Categories</h3>
                <div className="flex gap-10">
                  <ul className="list-none space-y-3">
                    {categoriesList.map((cat) => (
                      <Link
                        onMouseOver={() => dispatch(selectCategory(cat[0]))}
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
                            linkDestination={`/products/${prod.category}/${prod.id}`}
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
            </li>
            <li className="border-t lg:border-t-0 border-neutral-200 group">
              <Dropdown
                itemsText={useCases.map((useCase) => useCase.name)}
                text="Use Cases"
              />
              <BigMenu className="lg:group-hover:block">
                <h3 className="font-bold text-lg mb-6">
                  Our products, for your specific use
                </h3>
                <div className="grid grid-cols-3 gap-20">
                  <div className="space-y-3 col-span-1">
                    {useCases.map((useCase, index) => (
                      <span
                        onMouseOver={() =>
                          dispatch(selectUseCase(useCase.title))
                        }
                        key={useCase.title}
                        className={`flex gap-1 items-center ${
                          selectedUseCaseTitle === useCase.title
                            ? "text-yellow-500"
                            : ""
                        }`}
                      >
                        <FaChevronRight className="text-sm" />
                        <span>{useCase.title}</span>
                      </span>
                    ))}
                  </div>
                  {selectedUseCase && (
                    <div className="space-y-5 col-span-2 overflow-auto max-h-[60vh] text-left">
                      <h3 className="font-bold">{selectedUseCase.title}</h3>
                      <p>{selectedUseCase.shortSummary.slice(0, 200)}...</p>
                      <Image
                        className="max-h-72 mr-auto h-auto object-cover"
                        alt={selectedUseCase.title}
                        width={2000}
                        height={2000}
                        src={`/assets/images/${selectedUseCase.image}`}
                      />
                      <ButtonLink
                        className="border border-neutral-400 px-4 py-2 leading-4 w-fit"
                        isLink
                        linkDestination={`/usecases/${selectedUseCase.title}__${selectedUseCase.id}`}
                        text="Read more"
                      />
                    </div>
                  )}
                </div>
              </BigMenu>
            </li>
            <li className="border-t lg:border-t-0 border-neutral-200 group">
              <Dropdown
                itemsText={categoriesList.map((cat) => cat[0])}
                text="Case Studies"
              />
              <BigMenu className="lg:group-hover:block">
                <h3 className="font-bold text-lg mb-6">Case studies</h3>
                <div className="flex gap-10">
                  <ul className="list-none space-y-3">
                    {categoriesList.map((cat) => (
                      <span
                        onMouseOver={() => setSelectedCategory(cat[0])}
                        key={cat[0]}
                        href="#"
                        className={`flex gap-1 items-center ${
                          selectedCategory === cat[0] ? "text-yellow-500" : ""
                        }`}
                      >
                        <FaChevronRight className="text-sm" />
                        <span>{cat[0]}</span>
                      </span>
                    ))}
                  </ul>
                </div>
              </BigMenu>
            </li>

            <li className="border-t lg:border-t-0 border-neutral-200">
              <Link
                href="#"
                className="py-2 inline-block font-medium lg:py-5  text-neutral-600"
              >
                <span>About Us</span>
              </Link>
            </li>
            <li className="border-t lg:border-t-0 border-neutral-200">
              <Link
                href="#"
                className="py-2 inline-block font-medium lg:py-5  text-neutral-600"
              >
                <span>Contact Us</span>
              </Link>
            </li>
          </ul>
          {/* <SearchBox className="pl-10" /> */}
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
