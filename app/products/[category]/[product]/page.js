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

const ProductDetails = ({ params: { product } }) => {
  const { products } = useProducts();

  return (
    <div>
      <PageHeader title="DSC162.3" subtitle="Product">
        <Link href="/products" className="text-neutral-500">
          Home
        </Link>
        <FaChevronRight className="text-neutral-500" />
        <Link href="/products" className="text-neutral-500">
          Digital Satellite Clocks
        </Link>
        <FaChevronRight className="text-neutral-500" />
        <p className="font-bold">DSC162.3</p>
      </PageHeader>
      <div>{products.category}</div>
      <div>
        <SectionLayout>
          <SectionHeader
            isAlignedLeft
            className="text-left"
            title="Digital Satellite Clock (DSC 162.3)"
          />
          <div className="grid md:grid-cols-2 gap-20">
            <div className="border border-neutral-200">
              <div className="bg-neutral-200 px-8 py-16 ">
                <Image
                  src="/assets/images/dsc-144.png"
                  width={2000}
                  height={2000}
                  className="object-contain"
                  alt="product"
                />
              </div>
              <div className="flex gap-3 p-3 bg-neutral-100 bg-opacity-50">
                <div className="p-2 bg-neutral-400 w-20 h-20 flex items-center justify-between">
                  <Image
                    src="/assets/images/dsc-144.png"
                    width={200}
                    height={200}
                    className="object-contain"
                    alt="product"
                  />
                </div>
                <div className="p-2 border border-neutral-400 w-20 h-20 flex items-center justify-between opacity-50">
                  <Image
                    src="/assets/images/dsc-144.png"
                    width={200}
                    height={200}
                    className="object-contain"
                    alt="product"
                  />
                </div>
                <div className="p-2 border border-neutral-400 w-20 h-20 flex items-center justify-between opacity-50">
                  <Image
                    src="/assets/images/dsc-144.png"
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
                <li>2.3{'"'} (inch) character size</li>
                <li>Satellite disciplined</li>
                <li>It has a glance-able distance of 15m</li>
              </ul>
              <Button variant="primary" text="Contact Us Now" />
            </div>
          </div>
        </SectionLayout>
        <SectionLayout>
          <SectionHeader isAlignedLeft title="Similar Products" />
          <ProductsList className="grid grid-cols-4 gap-5">
            <ProductCard
              body={
                <>
                  <Image
                    src="/assets/images/dsc-162.3.png"
                    width={2000}
                    height={2000}
                    alt="product category"
                    className="object-contain w-full max-w-40 mx-auto"
                  />
                  <Badge text="DSC168" />
                </>
              }
            />
            <ProductCard
              body={
                <>
                  <Image
                    src="/assets/images/dsc-162.3.png"
                    width={2000}
                    height={2000}
                    alt="product category"
                    className="object-contain w-full max-w-40 mx-auto"
                  />
                  <Badge text="DSC168" />
                </>
              }
            />
            <ProductCard
              body={
                <>
                  <Image
                    src="/assets/images/dsc-162.3.png"
                    width={2000}
                    height={2000}
                    alt="product category"
                    className="object-contain w-full max-w-40 mx-auto"
                  />
                  <Badge text="DSC168" />
                </>
              }
            />
            <ProductCard
              body={
                <>
                  <Image
                    src="/assets/images/dsc-162.3.png"
                    width={2000}
                    height={2000}
                    alt="product category"
                    className="object-contain w-full max-w-40 mx-auto"
                  />
                  <Badge text="DSC168" />
                </>
              }
            />
            <ProductCard
              body={
                <>
                  <Image
                    src="/assets/images/dsc-162.3.png"
                    width={2000}
                    height={2000}
                    alt="product category"
                    className="object-contain w-full max-w-40 mx-auto"
                  />
                  <Badge text="DSC168" />
                </>
              }
            />
          </ProductsList>
        </SectionLayout>
      </div>
    </div>
  );
};

export default ProductDetails;
