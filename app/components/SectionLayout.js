import React from "react";

const SectionLayout = ({ children, className }) => {
  return (
    <section className={`${className}`}>
      <div className="container-custom">{children}</div>
    </section>
  );
};

export default SectionLayout;
