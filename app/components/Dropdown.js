import { urlParser } from "@/app/utils/functions";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { useEffect } from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa6";

const Dropdown = ({
  itemsText = [],
  text = "",
  className = "",
  baseUrl = "",
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  // const [selectedDropdown, setSelectedDropdown] = useState(text);

  const pathname = usePathname();

  // close nav when navigating to a new page

  useEffect(() => {
    setIsDropdownOpen(false);
  }, [pathname]);

  function handleToggle() {
    setIsDropdownOpen((cur) => !cur);
  }

  return (
    <div
      className={`dropdown-toggle cursor-pointer lg:pointer-events-none font-medium inline-block py-4 lg:py-5 w-full ${className}`}
    >
      <div
        onClick={handleToggle}
        className={`flex gap-1 items-center ${
          isDropdownOpen ? "mb-8" : ""
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
        <ul className="max-h-44 overflow-auto w-full lg:hidden space-y-5">
          {itemsText.map((text) => (
            <li key={text}>
              <Link
                href={`${baseUrl}/${urlParser(text)}`}
                className="w-full flex items-center gap-1"
              >
                <FaChevronRight />
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
