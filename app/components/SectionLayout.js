import React from "react";

const SectionLayout = ({ children, className, isContainerSmall = false }) => {
  return (
    <section className={`${className}`}>
      <div
        className={`${
          isContainerSmall ? "container-custom--sm" : "container-custom"
        }`}
      >
        {children}
      </div>
    </section>
  );
};

export default SectionLayout;
