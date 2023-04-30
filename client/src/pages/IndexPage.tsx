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
    <div className="w-desktopWide mx-auto">
      <h1>index page</h1>
      <div>
        <div>
          <h2>Latest properties for sale</h2>
          <div
            style={{
              display: "flex",
              width: "100%",
              flexWrap: "wrap",
              gap: "2rem",
              justifyContent: "space-between",
            }}
          >
            {data &&
              data.sell.map((el, index) => <Card property={el} key={index} />)}
          </div>
        </div>

        <div
          style={{
            width: "80%",
            height: "3px",
            backgroundColor: "rgba(216,216,216,0.8)",
            display: "block",
            borderRadius: "5px",
            margin: "3.2rem auto 3.2rem 0",
          }}
        >
          {/* separator line */}
        </div>
        <div>
          <h2>Latest properties for rent</h2>
          <div
            style={{
              width: "100%",
              display: "flex",
              flexWrap: "wrap",
              gap: "2rem",
              justifyContent: "space-between",
            }}
          >
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
