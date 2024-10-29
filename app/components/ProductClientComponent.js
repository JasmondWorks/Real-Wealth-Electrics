"use client";

import Badge from "@/app/components/Badge";
import Button from "@/app/components/Button";
import PageHeader from "@/app/components/PageHeader";
import ProductCard from "@/app/components/ProductCard";
import ProductsList from "@/app/components/ProductsList";
import SectionHeader from "@/app/components/SectionHeader";
import SectionLayout from "@/app/components/SectionLayout";
import { useProducts } from "@/app/contexts/productsContext";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaChevronRight } from "react-icons/fa6";
import Loader from "./Loader";
import { urlParser } from "../utils/functions";

const ProductClientComponent = ({ product, category }) => {
  const { products } = useProducts();
  const productData = products.find((prod) => prod.id === product);

  const similarProducts = products.filter(
    (prod) => urlParser(prod.category) === category && prod.id !== product
  );

  // if (!productData?.id) return <Loader />;

  return (
    <div>
      <PageHeader title={product.toUpperCase()} subtitle="Product">
        <Link href="/" className="text-neutral-500">
          Home
        </Link>
        <FaChevronRight className="text-neutral-500" />
        <Link href={`/products/${category}`} className="text-neutral-500">
          {productData.category}
        </Link>
        <FaChevronRight className="text-neutral-500" />
        <p className="font-bold">{product.toUpperCase()}</p>
      </PageHeader>
      <div>
        <SectionLayout>
          <SectionHeader
            isAlignedLeft
            className="text-left"
            title={`${
              productData?.category
            } (${productData?.id.toUpperCase()})`}
          />
          <div className="grid md:grid-cols-2 gap-20">
            <div className="border border-neutral-200">
              <div className="bg-neutral-200 px-8 py-16 ">
                <Image
                  src={`/assets/images/${productData?.images[0]}`}
                  width={2000}
                  height={2000}
                  className="object-contain"
                  alt="product"
                />
              </div>
              <div className="flex gap-3 p-3 bg-neutral-100 bg-opacity-50">
                <div className="p-2 bg-neutral-400 w-20 h-20 flex items-center justify-between">
                  <Image
                    src={`/assets/images/${productData?.images[0]}`}
                    width={200}
                    height={200}
                    className="object-contain"
                    alt="product"
                  />
                </div>
                <div className="p-2 border border-neutral-400 w-20 h-20 flex items-center justify-between opacity-50">
                  <Image
                    src={`/assets/images/${productData?.images[0]}`}
                    width={200}
                    height={200}
                    className="object-contain"
                    alt="product"
                  />
                </div>
                <div className="p-2 border border-neutral-400 w-20 h-20 flex items-center justify-between opacity-50">
                  <Image
                    src={`/assets/images/${productData?.images[0]}`}
                    width={200}
                    height={200}
                    className="object-contain"
                    alt="product"
                  />
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-6">Key Features</h3>
              <ul className="list-disc mb-12 space-y-3 pl-4">
                {productData?.specifications?.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <Button variant="primary" text="Contact Us Now" />
            </div>
          </div>
        </SectionLayout>
        {similarProducts && (
          <SectionLayout>
            <SectionHeader isAlignedLeft title="Similar Products" />
            <ProductsList className="grid grid-cols-4 gap-5">
              {similarProducts.map((prod) => (
                <ProductCard
                  key={prod.id}
                  linkDestination={`/products/${category}/${prod.id}`}
                  body={
                    <>
                      <Image
                        src={`/assets/images/${prod.images[0]}`}
                        width={2000}
                        height={2000}
                        alt="product category"
                        className="object-contain w-full max-w-40 mx-auto"
                      />
                      <Badge text={prod.id.toUpperCase()} />
                    </>
                  }
                />
              ))}
            </ProductsList>
          </SectionLayout>
        )}
      </div>
    </div>
  );
};

export default ProductClientComponent;
