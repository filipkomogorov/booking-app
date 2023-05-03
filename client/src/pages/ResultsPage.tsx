import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

const ResultsPage = () => {
  const [searchParams] = useSearchParams();
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("/results", { params: searchParams });
      setResults(data);
    };

    fetchData();
  }, [searchParams]);

  return (
    <div>
      Results here
      {/* Render your results here */}
    </div>
  );
};

export default ResultsPage;
