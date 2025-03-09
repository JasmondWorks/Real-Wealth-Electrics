import React from "react";

const ProductsList = ({ children, className, items = [] }) => {
  return (
    <div
      className={`gap-16 grid grid-cols-1 ${
        items.length > 1 ? "md:grid-cols-2" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default ProductsList;
