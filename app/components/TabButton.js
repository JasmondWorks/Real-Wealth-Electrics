import Link from "next/link";
import React from "react";

const TabButton = ({ text, link, selectedTab = "", onSelectTab }) => {
  const isSelected = selectedTab === text;

  if (link)
    return (
      <Link
        className="font-semibold text-neutral-500 inline-block py-2 px-6 whitespace-nowrap"
        href={link}
      >
        {text}
      </Link>
    );

  return (
    <button
      onClick={onSelectTab}
      className={`py-2 whitespace-nowrap px-6 font-semibold text-neutral-500 ${
        isSelected
          ? "border-b-4 border-primary text-black "
          : "border-b-4 border-transparent"
      }`}
    >
      {text}
    </button>
  );
};

export default TabButton;
