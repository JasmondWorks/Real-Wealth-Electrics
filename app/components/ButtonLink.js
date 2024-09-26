import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const ButtonLink = ({ text, className, size = "small" }) => {
  if (size === "small")
    return (
      <Link
        href="#"
        className={`whitespace-nowrap flex items-center gap-2 transition-all hover:gap-4 ${className}`}
      >
        <span className="font-bold text-sm">{text}</span>
        <FaArrowRight />
      </Link>
    );
  return (
    <Link
      href="#"
      className={`hover:gap-4 transition-all whitespace-nowrap flex items-center gap-3 ${className}`}
    >
      <span className="font-bold text-base">{text}</span>
      <FaArrowRight className="text-xl" />
    </Link>
  );
};

export default ButtonLink;
