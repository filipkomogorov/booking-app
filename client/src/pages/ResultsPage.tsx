import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import Card from "../components/Card/Card";

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
    <div className="w-desktop80 mx-auto flex flex-row gap-8">
      <div>Filters here</div>
      <div className="flex flex-col">
        <div>Search bar here</div>
        <div className="flex flex-col">
          <h2>Results for {city}</h2>
          <div>
            {results ? (
              <div>
                {results.map((el, index) => (
                  <Card property={el} />
                ))}
              </div>
            ) : (
              <div>no results</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultsPage;
