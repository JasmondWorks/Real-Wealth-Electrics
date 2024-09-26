import React from "react";
import Badge from "./Badge";
import Link from "next/link";
import ArrowLink from "./ButtonLink";
import Image from "next/image";

const ProductCard = ({ title, body, className, isCategory, product }) => {
  return (
    <div
      className={`flex flex-col group hover:border-primary border max-w-xl lg:max-w-none border-neutral-200 text-center ${className}`}
    >
      {title && (
        <h3
          className="p-3 group-hover:bg-primary group-hover:text-black font-bold 
         bg-primaryLight"
        >
          {title}
        </h3>
      )}
      <div className="space-y-4 py-8 flex flex-col items-center justify-center flex-1">
        {body && body}
        {product?.id && (
          <>
            <Image
              src={`/assets/images/${product.images[0]}`}
              width={2000}
              height={2000}
              alt={`${product.category} category`}
              className="object-contain w-full max-w-40 mx-auto"
            />
            <Badge text={product.id.toUpperCase()} />
          </>
        )}
      </div>
      <ArrowLink
        className="p-4 border-t border-neutral-200 flex justify-center opacity-85"
        text={title ? `All ${title}` : "Go to product"}
      />
    </div>
  );
};

export default ProductCard;
