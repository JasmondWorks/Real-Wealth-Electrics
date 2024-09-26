import React from "react";
import { IoSearch } from "react-icons/io5";

const SearchBox = ({ isCollapsible = true, className }) => {
  return (
    <label htmlFor="searchInput" className={`p-2 px-3 rounded-md flex gap-2 items-center ${className}`}>
      {/* <input
      id="searchInput"
        className="border-none outline-none"
        type="search"
        placeholder="Search..."
      /> */}
      <label htmlFor="searchInput">
          <IoSearch />
      </label>
    </label>
  );
};

export default SearchBox;
