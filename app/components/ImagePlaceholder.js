import React from "react";

export default function ImagePlaceholder({ text = "Image here!", className }) {
  return (
    <div
      className={`w-full p-5 text-center min-h-96 bg-neutral-200 rounded-md flex items-center justify-center ${className}`}
    >
      <p className="text-neutral-500 font-bold text-lg">{text}</p>
    </div>
  );
}
