"use client";

import React from "react";
import BlogDetails from "../components/BlogDetails";
import SectionLayout from "../components/SectionLayout";
import SectionHeader from "../components/SectionHeader";
import ProductsList from "../components/ProductsList";
import ProductCard from "../components/ProductCard";
import Image from "next/image";
import Badge from "../components/Badge";
import { useAppData } from "../contexts/appContext";
import _ from "lodash";
import { urlParser } from "../utils/functions";
import OtherLinksList from "./OtherLinksList";

const CategoryClientComponent = ({ category }) => {
  const { categories } = useAppData();
  const categoryData = categories.find(
    (cat) => urlParser(cat.title) === category
  );
  const { title, image, products: categoryProducts } = categoryData;
  const otherCategories = categories.filter(
    (cat) => urlParser(cat.title) !== category
  );

  return (
    <div className="pt-2">
      <BlogDetails
        smallPageImage
        pageRoute={category}
        data={categories}
        heading={`Features of the ${title}`}
        pageSubtitle="Category"
        pageImage={image}
      />
      <SectionLayout>
        <SectionHeader title="Product(s)" />
        <ProductsList items={categoryProducts}>
          {categoryProducts.map((prod) => (
            <ProductCard
              key={prod.id}
              href={`/products/${category}/${prod.id}`}
              body={
                <>
                  <Image
                    src={`/assets/images/${prod.images[0]}`}
                    width={2000}
                    height={2000}
                    alt="product category"
                    className="object-contain w-full mx-auto max-w-sm"
                  />
                  <Badge text={prod.id.toUpperCase()} />
                </>
              }
            />
          ))}
        </ProductsList>
      </SectionLayout>
      <SectionLayout>
        <SectionHeader title="Other product categories" />
        <div className="flex flex-wrap gap-5 justify-center">
          <OtherLinksList basePath="products" linksArr={otherCategories} />
        </div>
      </SectionLayout>
    </div>
  );
};

export default CategoryClientComponent;
