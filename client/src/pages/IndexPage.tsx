import { useEffect, useState } from "react";
import axios from "axios";
import { PropertyData } from "../models/Property";

const IndexPage = () => {
  const [data, setData] = useState<Array<PropertyData> | undefined>([]);

  const getLatestPropertiesForSale = async () => {
    try {
      const response = await axios.get("/latest-properties-for-sale");
      setData(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getLatestPropertiesForSale();
  }, []);

  return (
    <div>
      <h1>index page</h1>
      {data &&
        data.map((el, index) => (
          <div key={index}>
            <p>{el.title}</p>
          </div>
        ))}
    </div>
  );
};

export default IndexPage;
