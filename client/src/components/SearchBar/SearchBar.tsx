import React, { useState } from "react";
import TextFieldWithIcon from "../TextFields/TextFieldWithIcon";
import { useNavigate } from "react-router-dom";
import { AdvertisementType } from "../../models/Property";

interface SearchBar {
  placeholder?: string;
  addType?: AdvertisementType;
  name: string;
  type: string;
}

const SearchBar: React.FC<SearchBar> = ({ ...props }) => {
  const [city, setCity] = useState<string | undefined>();
  const navigate = useNavigate();

  const queryParams = new URLSearchParams();

  const handleSearch = () => {
    if (props.addType) {
      queryParams.set("addType", props.addType);
    }

    if (city) {
      queryParams.set("city", city);
    }

    queryParams.set("page", "1");
    queryParams.set("limit", "10");

    navigate(`/results?${queryParams.toString()}`);
  };

  return (
    <div
      className="flex flex-row items-center justify-center align-content-center"
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <div className="flex justify-center items-center pr-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8"
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
          onChange={(e) => setCity(e.target.value)}
          style={{
            border: "none",
            outline: "none",
            height: "5rem",
            width: "60rem",
          }}
        />
      </div>
      <button
        className="rounded-lg px-7 py-3 bg-cta text-white"
        onClick={() => handleSearch()}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
