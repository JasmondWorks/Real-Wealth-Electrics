"use client";

import React, { useState } from "react";
import { useOutsideClick } from "../hooks/useOutsideClick";
import { ChevronDown } from "lucide-react";

function SelectBox({
  options = [],
  selectedOption,
  onSelect,
  placeholder = "",
}) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useOutsideClick(() => setIsOpen(false), false);

  function handleSelect(option) {
    onSelect(option);
    setIsOpen(false);
  }

  return (
    <div className="relative inline-block">
      {/* Button */}
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        className="w-full leading-none text-left bg-transparent  rounded-md focus:ring-2 ring-offset-2 outline-none transition-all duration-300 ease-in-out focus:ring-primary font-semibold flex items-center gap-1"
      >
        <span>{selectedOption || placeholder || "Select an Option"}</span>
        <ChevronDown strokeWidth={2} size={20} className="text-neutral-500" />
      </button>

      {/* Dropdown */}
      {isOpen && options.length !== 0 && (
        <ul
          ref={ref}
          className="absolute z-10 w-fit mt-2 bg-white border border-gray-300 rounded-md shadow-lg overflow-hidden divide-y"
        >
          {options.map((option, index) => (
            <li
              tabIndex={index}
              key={index}
              className="w-fit text-left px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleSelect(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SelectBox;
