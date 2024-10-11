"use client";

import React from "react";
import PageHeader from "@/app/components/PageHeader";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa6";
import BlogDetails from "@/app/components/BlogDetails";
import SectionLayout from "@/app/components/SectionLayout";
import SectionHeader from "@/app/components/SectionHeader";
import ProductsList from "@/app/components/ProductsList";
import ProductCard from "@/app/components/ProductCard";
import Image from "next/image";
import Badge from "@/app/components/Badge";
import { useAppData } from "@/app/contexts/appContext";
import _ from "lodash";
import { urlParser } from "../utils/functions";

const CategoryClientComponent = ({ category }) => {
  const { categories } = useAppData();
  const categoryData = categories.find(
    (cat) => urlParser(cat.title) === category
  );
  const { title, image, products: categoryProducts } = categoryData;

  return (
    <div>
      <BlogDetails
        pageRoute={category}
        data={categories}
        heading={`Features of the ${title}`}
        pageSubtitle="Category"
        pageImage={image}
      />
      <SectionLayout>
        <SectionHeader title="Products" />
        <ProductsList className="grid grid-cols-4 gap-5">
          {categoryProducts.map((prod) => (
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
    </div>
  );
};

export default CategoryClientComponent;
