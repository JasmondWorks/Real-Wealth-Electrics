"use client";

import { useAppData } from "@/app/contexts/appContext";
import { useProducts } from "@/app/contexts/productsContext";
import { urlParser } from "@/app/utils/functions";
import Link from "next/link";
import React from "react";
import { FaChevronRight } from "react-icons/fa6";

const Footer = () => {
  const { products } = useProducts();
  const { categories: allCategories } = useAppData();
  const { useCases } = useAppData();

  const categories = allCategories.map((cat) => {
    const productsArray = [];

    products.forEach((product) => {
      if (product.category === cat.title) productsArray.push(product);
    });

    return { ...cat, products: productsArray };
  });

  return (
    <footer className="bg-secondary text-neutral-300 text-base" id="footer">
      <div className="py-16 container-custom">
        <div className="grid sm:grid-cols-10 gap-20">
          <div className="border-white border-opacity-5  pb-8 col-span-5 xl:col-span-3">
            <h2
              className="font-bold mb-10 space-x-2 text-lg pb-2
          "
            >
              <span className="font-extrabold">RWE</span>
              <span>Real-Wealth Electrics</span>
            </h2>
            <div className="space-y-4">
              <p>
                RWE was established to engage in the business of the manufacture
                of electrical and electronic products for the world market.
              </p>
              <p>
                It is our tradition to seek to exceed customers’ expectations
                and produce products that can compete favorably with any product
                in their category from anywhere in the world in quality and
                price.
              </p>
            </div>
          </div>
          <div className="  border-white border-opacity-5 pb-8 xl:col-span-4 col-span-5">
            <h2 className="text-lg font-bold mb-10 pb-2 space-x-6">
              Quick Links
            </h2>
            <div className="space-y-14">
              <div>
                <h3 className="font-bold mb-5 text-sm">Categories</h3>
                <ul className="list-none grid md:grid-cols-2 gap-5 items-start">
                  {categories.map((category) => (
                    <li key={category.id}>
                      <Link
                        href={`/products/${urlParser(category.title)}`}
                        className="flex gap-1 items-center hover:underline"
                      >
                        <FaChevronRight />
                        <span>{category.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-5 text-sm">Use Cases</h3>
                <ul className="list-none grid md:grid-cols-2 gap-5">
                  {useCases.map((useCase) => (
                    <li key={useCase.id}>
                      <Link
                        href={`/usecases/${urlParser(useCase.title)}`}
                        className="flex gap-1 items-center hover:underline"
                      >
                        <FaChevronRight />
                        <span>{useCase.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className=" border-white border-opacity-5 pb-8 col-span-5 xl:col-span-3">
            <h2 className="text-lg font-bold mb-10 pb-2 space-x-6">Contact</h2>
            <div className="space-y-6">
              <div className="space-y-2">
                <p className="font-bold">Address:</p>
                <p>#1, Church Street, Mosan Ipaja Lagos 100275, Nigeria.</p>
              </div>
              <div className="space-y-2">
                <p className="font-bold">Email:</p>
                <p>info@realwealthelectrics.com</p>
              </div>
              <div className="space-y-2">
                <p className="font-bold">Phone numbers:</p>
                <p>08032134613, 08056007204</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="text-center py-4 border-t border-white border-opacity-5">
        Copyright &copy; Real-Wealth Electrics {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
