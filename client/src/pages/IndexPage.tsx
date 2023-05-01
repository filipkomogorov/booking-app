import { useEffect, useState } from "react";
import banner from "../assets/banner.jpg";
import axios from "axios";
import { PropertyData } from "../models/Property";
import Card from "../components/Card/Card";
import { Link } from "react-router-dom";

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
    <div className="w-desktop80 mx-auto">
      <div
        style={{
          height: "57rem",
          width: "100%",
          backgroundImage: `url(${banner})`,
          backgroundSize: "cover",
          backgroundPosition: "bottom",
          marginBottom: "3.2rem",
          position: "relative",
        }}
      ></div>
      <div className="w-desktopWide mx-auto">
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
                data.sell.map((el, index) => (
                  <Card property={el} key={index} />
                ))}
              <div className="flex items-center">
                <Link to="/buy" style={{ textDecoration: "underline" }}>
                  See all{" "}
                </Link>
              </div>
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
              <div className="flex items-center">
                <Link to="/rent" style={{ textDecoration: "underline" }}>
                  See all{" "}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
