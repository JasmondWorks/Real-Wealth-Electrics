import Link from "next/link";
import React from "react";

const Button = ({
  variant = "primary",
  text,
  icon = "",
  linkDestination = "",
}) => {
  if (linkDestination && variant === "primary")
    return (
      <Link
        href={linkDestination}
        className="py-4 leading-5 px-6 text-neutral-800 bg-primary font-bold rounded-md border-2 border-primary"
      >
        <span>{icon}</span>
        <span>{text}</span>
      </Link>
    );
  if (linkDestination && variant === "secondary")
    return (
      <Link
        href={linkDestination}
        className="py-4 leading-5 px-6 text-neutral-800 border-2 border-primary font-bold rounded-md"
      >
        <span>{icon}</span>
        <span>{text}</span>
      </Link>
    );
  return (
    <>
      {variant === "primary" && (
        <button className="py-4 leading-5 px-6 text-neutral-800 bg-primary font-bold rounded-md border-2 border-primary">
          <span>{icon}</span>
          <span>{text}</span>
        </button>
      )}
      {variant === "secondary" && (
        <button className="py-4 leading-5 px-6 text-neutral-800 border-2 border-primary font-bold rounded-md">
          <span>{icon}</span>
          <span>{text}</span>
        </button>
      )}
    </>
  );
};

export default Button;
