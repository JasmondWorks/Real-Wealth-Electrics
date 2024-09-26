import React from "react";

const SectionHeader = ({
  title = "",
  subtitle = "",
  isAlignedLeft = false,
  className,
}) => {
  return (
    <div
      className={`space-y-8 mb-20 ${!isAlignedLeft ? 'max-w-3xl mx-auto text-center' : ''} ${className}`}
    >
      <h2 className="text-3xl font-bold">{title}</h2>
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
};

export default SectionHeader;
