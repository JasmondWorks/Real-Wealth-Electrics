import Link from "next/link";
import React, { useState } from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa6";

const Dropdown = ({ itemsText = [], text = "", className = "" }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  // const [selectedDropdown, setSelectedDropdown] = useState(text);

  return (
    <div
      onClick={() => setIsDropdownOpen((cur) => !cur)}
      className={`cursor-pointer lg:pointer-events-none font-medium inline-block py-4 lg:py-5 w-full ${className}`}
    >
      <div
        className={`flex gap-1 items-center ${
          isDropdownOpen ? "mb-5" : ""
        } lg:mb-0`}
      >
        <span className={`w-full ${isDropdownOpen ? "font-bold" : ""}`}>
          {text}
        </span>
        {!isDropdownOpen ? (
          <FaChevronRight className="text-sm pointer-events-none" />
        ) : (
          <FaChevronDown className="text-sm pointer-events-none" />
        )}
      </div>
      {isDropdownOpen && (
        <ul className="max-h-36 overflow-auto w-full lg:hidden space-y-2">
          {itemsText.map((text) => (
            <li key={text}>
              <Link href="#" className="w-full inline-block">
                {text}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
