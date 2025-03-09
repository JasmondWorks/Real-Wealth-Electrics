import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const ButtonLink = ({
  text,
  className,
  size = "small",
  href = "",
  onClick,
  isLink = true,
  icon = "",
}) => {
  const baseStyle =
    "transition-all text-neutral-600 inline-flex items-center gap-2 hover:gap-4 whitespace-nowrap hover:text-black";

  const variants = {
    small: baseStyle + " ",
    large: baseStyle + " ",
  };
  if (isLink && size === "small")
    return (
      <Link
        onClick={onClick}
        href={href}
        className={`whitespace-nowrap inline-flex items-center gap-2 transition-all hover:gap-4 ${className}`}
      >
        <span className="font-bold">{text}</span>
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
        <span className="font-bold">{text}</span>
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
        <span className="font-bold text-2xl">{text}</span>
        {icon}
        {!icon && <FaArrowRight />}
      </button>
    );

  return (
    <Link
      onClick={onClick}
      href={href}
      className={`hover:gap-4 transition-all whitespace-nowrap flex items-center gap-3 ${className}`}
    >
      <span className="font-bold text-xl">{text}</span>
      <FaArrowRight className="text-xl" />
    </Link>
  );
};

export default ButtonLink;
