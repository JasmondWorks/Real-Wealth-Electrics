import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const ButtonLink = ({
  text,
  className,
  size = "small",
  linkDestination = "",
  onClick,
  isLink = true,
  icon = "",
}) => {
  if (isLink && size === "small")
    return (
      <Link
        onClick={onClick}
        href={linkDestination}
        className={`whitespace-nowrap inline-flex items-center gap-2 transition-all hover:gap-4 ${className}`}
      >
        <span className="font-bold text-sm">{text}</span>
        {icon}
        {!icon && <FaArrowRight />}
      </Link>
    );
  if (!isLink && size === "small")
    return (
      <button
        onClick={onClick}
        className={`whitespace-nowrap inline-flex items-center gap-2 transition-all hover:gap-4 ${className}`}
      >
        <span className="font-bold text-sm">{text}</span>
        {icon}
        {!icon && <FaArrowRight />}
      </button>
    );
  if (!isLink && size !== "small")
    return (
      <button
        onClick={onClick}
        className={`whitespace-nowrap inline-flex items-center gap-2 transition-all hover:gap-4 ${className}`}
      >
        <span className="font-bold text-xl">{text}</span>
        {icon}
        {!icon && <FaArrowRight />}
      </button>
    );

  return (
    <Link
      onClick={onClick}
      href={linkDestination}
      className={`hover:gap-4 transition-all whitespace-nowrap flex items-center gap-3 ${className}`}
    >
      <span className="font-bold text-base">{text}</span>
      <FaArrowRight className="text-xl" />
    </Link>
  );
};

export default ButtonLink;
