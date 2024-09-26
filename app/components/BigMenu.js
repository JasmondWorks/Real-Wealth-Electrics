import React from "react";

const BigMenu = ({ children, className }) => {
  return (
    <div
      className={`hidden z-10 absolute bottom-0 translate-y-[100%] w-full right-[50%] translate-x-[50%] container-custom ${className}`}
    >
      <div className="max-h-[80vh] shadow-lg border p-6 border-neutral-200 bg-white">
        {children}
      </div>
    </div>
  );
};

export default BigMenu;
