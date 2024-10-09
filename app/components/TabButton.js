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
      className={`py-2 ${
        isVerticalPaddingBig ? "pt-5 pb-4" : "pt-3 pb-2"
      } whitespace-nowrap px-6 font-semibold ${
        textColor === "dark" ? "text-neutral-500" : "text-neutral-300"
      } ${
        isSelected
          ? "border-b-4 border-primary"
          : "border-b-4 border-transparent"
      }`}
    >
      {text}
    </button>
  );
};

export default TabButton;
