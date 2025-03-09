import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const ButtonLink = ({
  text,
  className,
  variant = "small",
  href = "",
  onClick,
  icon = "",
}) => {
  const baseStyles =
    "transition-all text-neutral-600 inline-flex items-center gap-2 hover:gap-4 whitespace-nowrap hover:text-black font-bold";

  const variants = {
    small: baseStyles + " text-base",
    large: baseStyles + " text-lg",
    cta: baseStyles + " !text-black text-xl",
  };

  if (href)
    return (
      <Link
        onClick={onClick}
        href={href}
        className={`${variants[variant]} ${className}`}
      >
        <span>{text}</span>
        {icon}
        {!icon && <FaArrowRight />}
      </Link>
    );

  return (
    <button onClick={onClick} className={`${variants[variant]} ${className}`}>
      <span>{text}</span>
      {icon}
      {!icon && <FaArrowRight />}
    </button>
  );
};

export default ButtonLink;
