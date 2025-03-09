import React from "react";
import Badge from "./Badge";
import Link from "next/link";
import ArrowLink from "./ButtonLink";
import Image from "next/image";
import ButtonLink from "./ButtonLink";

const ProductCard = ({ title, body, className, isCategory, product, href }) => {
  return (
    <div className={`flex flex-col group space-y-6 text-center ${className}`}>
      {/* {title && (
        <h3
          className="p-3 group-hover:bg-primary group-hover:text-black font-bold 
         bg-primaryLight"
        >
          {title}
        </h3>
      )} */}
      <div className="space-y-3 flex flex-col items-center justify-center flex-1">
        {body && body}
        {product?.id && (
          <div className="flex flex-col items-center justify-center flex-1 gap-4">
            <Image
              className="object-contain w-full max-w-60 mx-auto flex-1"
              src={`/assets/images/${product.images[0]}`}
              width={2000}
              height={2000}
              alt={`${product.category} category`}
            />
            <Badge className="font-medium" text={product.id.toUpperCase()} />
          </div>
        )}
      </div>
      <ButtonLink
        className="flex justify-center hover:text-black"
        text={title ? `${title} products` : "Go to product"}
        href={href}
        // href="/products/precision-wall-clock"
      />
    </div>
  );
};

export default ProductCard;
