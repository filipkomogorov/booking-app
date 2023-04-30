import { useEffect, useState } from "react";
import axios from "axios";
import { PropertyData } from "../models/Property";
import Card from "../components/Card/Card";

type CombinedProperties = {
  sell: Array<PropertyData>;
  rent: Array<PropertyData>;
};

const IndexPage = () => {
  const [data, setData] = useState<CombinedProperties>();

  const getLatestProperties = async () => {
    try {
      const results = await axios.get("/get-latest-properties");
      setData(results.data);
    } catch (err) {
      console.log("Error ", err);
    }
  };

  useEffect(() => {
    getLatestProperties();
  }, []);

  return (
    <div>
      <h1>index page</h1>
      <div>
        <div>
          <h2>Latest properties for sale</h2>
          <div>
            {data &&
              data.sell.map((el, index) => <Card property={el} key={index} />)}
          </div>
        </div>
        <div>
          <h2>Latest properties for rent</h2>
          <div>
            {data &&
              data.rent.map((element, index) => (
                <Card property={element} key={index} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
