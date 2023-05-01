import { useEffect, useState } from "react";
import banner from "../assets/banner.jpg";
import axios from "axios";
import { PropertyData } from "../models/Property";
import Card from "../components/Card/Card";
import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar/SearchBar";

type CombinedProperties = {
  sell: Array<PropertyData>;
  rent: Array<PropertyData>;
};

const IndexPage = () => {
  const [data, setData] = useState<CombinedProperties>();
  const [itemChosen, setItemChosen] = useState<string>("Buy");

  interface ListItemProps {
    label: string;
  }

  const ListItem: React.FC<ListItemProps> = ({ label }) => {
    const commonStyle: React.CSSProperties = {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "25%",
      textAlign: "center",
      height: "5rem",
      cursor: "pointer",
      padding: "0.5rem",
      borderBottom:
        label === itemChosen ? "2px solid red" : "1px solid #a69da1",
    };

    return (
      <li onClick={() => setItemChosen(label)} style={commonStyle}>
        {label}
      </li>
    );
  };

  const ListItems = ["Buy", "Rent", "Address", "Agents"];

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
          marginBottom: "6.4rem",
          position: "relative",
        }}
      >
        <div
          style={{
            width: "75rem",
            height: "13rem",
            borderRadius: "0.5rem",
            backgroundColor: "white",
            position: "absolute",
            top: "20%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <ul className="flex flex-row">
            {ListItems.map((item, index) => (
              <ListItem key={index} label={item} />
            ))}
          </ul>
          <div style={{ height: "7rem" }}>
            <SearchBar
              placeholder="get placeholder"
              name={"search"}
              type={"text"}
            />
          </div>
        </div>
      </div>
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
