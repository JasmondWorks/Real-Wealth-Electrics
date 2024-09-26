import React from "react";

const ProductsList = ({ children, className }) => {
  return (
    <div
    className={`${className}`}
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "1rem",
      }}
    >
      {children}
    </div>
  );
};

export default ProductsList;
