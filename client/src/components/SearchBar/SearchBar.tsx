import React from "react";
import TextFieldWithIcon from "../TextFields/TextFieldWithIcon";

interface SearchBar {
  placeholder: string;
  name: string;
  type: string;
}

const SearchBar: React.FC<SearchBar> = ({ ...props }) => {
  return (
    <div
      className="flex flex-row items-center justify-center align-content-center"
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <div className="flex justify-center items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-12 h-12"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </div>
      <div>
        <input
          {...props}
          style={{
            border: "none",
            outline: "none",
            height: "5rem",
            width: "43rem",
          }}
        />
      </div>
      <button>Search</button>
    </div>
  );
};

export default SearchBar;
