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
      className={`space-y-3 z-10 ${
        isMarginBottomPresent ? "mb-14 md:mb-20" : ""
      } ${!isAlignedLeft ? "max-w-3xl mx-auto text-center" : ""} ${className}`}
    >
      <h2
        className={`${headingSize === "normal" ? "leading-snug" : ""} ${
          headingSize === "small" ? "" : ""
        }
         `}
      >
        {title}
      </h2>
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
};

export default SectionHeader;
