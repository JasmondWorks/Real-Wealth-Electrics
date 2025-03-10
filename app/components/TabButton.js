import Link from "next/link";
import React from "react";

const TabButton = ({
  text,
  textColor,
  link,
  selectedTab = "",
  onSelectTab,
  isVerticalPaddingBig,
}) => {
  const isSelected = selectedTab === text;

  if (link)
    return (
      <Link
        className={`font-semibold text-neutral-500 inline-block ${
          isVerticalPaddingBig ? "py-4" : "py-2"
        } px-6 whitespace-nowrap`}
        href={link}
      >
        {text}
      </Link>
    );

  return (
    <button
      onClick={onSelectTab}
      className={`py-2 text-sm whitespace-nowrap px-4 font-semibold relative ${
        isVerticalPaddingBig ? "pt-5 pb-4" : "pt-3 pb-2"
      } ${textColor === "dark" ? "text-neutral-500" : "text-neutral-300"} `}
    >
      {text}
      <span
        className={
          isSelected
            ? "absolute bottom-0 left-0 w-full h-0.5 bg-primary"
            : "hidden"
        }
      ></span>
    </button>
  );
};

export default TabButton;
