import Link from "next/link";
import React from "react";

const Button = ({
  variant = "primary",
  text,
  href = "",
  className = "",
  onClick,
  size = "base",
  children,
  disabled,
}) => {
  const sizes = {
    sm: "px-4 py-3",
    base: "px-6 py-5 text-lg",
    lg: "px-8 py-6 text-xl",
  };
  const baseStyles = `hover:bg-primary/90 transition-all duration-300 text-neutral-800 hover:text-black focus-visible:text-black bg-primary font-bold rounded-md border-primary focus-visible:ring-2 ring-primary ring-offset-2 !outline-none leading-none ${sizes[size]} disabled:bg-neutral-200 disabled:border-neutral-200 disabled:cursor-not-allowed whitespace-nowrap items-center cursor-pointer`;
  const variants = {
    primary:
      baseStyles +
      " border-[1px] bg-primary hover:bg-primaryDark focus-visible:bg-primaryDark",
    secondary:
      baseStyles +
      " border-2 bg-transparent hover:bg-primary hover:text-neutral-800 focus-visible:!text-current",
  };

  if (href)
    return (
      <Link
        disabled={disabled}
        href={href}
        className={`${variants[variant]} ${className} `}
      >
        {text && <span>{text}</span>}
        {!text && children}
      </Link>
    );

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`${variants[variant]}  ${className}`}
    >
      {text && text}
      {!text && children}
    </button>
  );
};

export default Button;
