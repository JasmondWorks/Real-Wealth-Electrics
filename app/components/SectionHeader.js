import React from "react";

const SectionHeader = ({
  title = "",
  subtitle = "",
  isAlignedLeft = false,
  className = "",
  headingSize = "normal",
  isMarginBottomPresent = true,
}) => {
  return (
    <div
      className={`space-y-8 ${isMarginBottomPresent ? "mb-14 lg:mb-20" : ""} ${
        !isAlignedLeft ? "max-w-3xl mx-auto text-center" : ""
      } ${className}`}
    >
      <h2
        className={`${
          headingSize === "normal" ? "text-2xl lg:text-3xl leading-snug" : ""
        } ${headingSize === "small" ? "text-xl lg:text-2xl" : ""}
         font-bold`}
      >
        {title}
      </h2>
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
};

export default SectionHeader;
