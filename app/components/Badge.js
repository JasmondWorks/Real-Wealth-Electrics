import React from "react";

const Badge = ({ variant = "neutral", text = "", className }) => {
  return (
    <span
      className={`inline-block w-fit mx-auto rounded-md py-[6px] px-2 font-bold leading-none text-sm border border-neutral-300 ${className}`}
    >
      {text}
    </span>
  );
};

export default Badge;
