import React from "react";

import { PropertyData } from "../../models/Property";
import { Link } from "react-router-dom";

interface Identifiable {
    _id?: string;
  }

interface CardProps {
  property: PropertyData & Identifiable;
}

const Card: React.FC<CardProps> = ({ property }) => {
    console.log(property._id)
  return (
    <Link
    to={`/${property._id}`}
      style={{
        width: "25rem",
        height: "26rem",
        boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
      }}
    >
      <div style={{height: ''}}>
        <img src={property.images[0]} alt="" />
      </div>
      <div className="flex flex-col gap-2 px-4 py-2">
        <p
          style={{
            fontSize: "1.5rem",
          }}
        >
          {property.title}
        </p>
        <p
          style={{
            fontSize: "1.4rem",
          }}
        >{`${property.location.address}, ${property.location.city}`}</p>
        <div className="flex flex-row justify-between">
          <p
            style={{
              fontSize: "1.4rem",
            }}
          >
            {property.price}kr.
          </p>
          <p
            style={{
              fontSize: "1.4rem",
            }}
          >
            {property.size}m2
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
