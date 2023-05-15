import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import Card from "../components/Card/Card";
import SearchBar from "../components/SearchBar/SearchBar";

const ResultsPage = () => {
  const [searchParams] = useSearchParams();
  const city = searchParams.get("city");
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("/results?", { params: searchParams });
      setResults(data);
    };

    fetchData();
  }, [searchParams]);

  return (
    <div className="w-desktop80 mx-auto flex flex-row gap-8 items-center">
      <div>Filters here</div>
      <div className="flex flex-col">
        <div>
          <SearchBar
            placeholder="Search for a city"
            name="search"
            type="text"
            style={{
              boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
              borderRadius: "5px",
              padding: "0 5px",
            }}
          />
        </div>
        <div className="flex flex-col" style={{ width: "100%" }}>
          <h2>Results for {city}</h2>
          {results ? (
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "2rem",
                justifyContent: "space-between",
              }}
            >
              {results.map((el, index) => (
                <Card property={el} />
              ))}
            </div>
          ) : (
            <div>
              <h2>There are no result for {city}</h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResultsPage;
