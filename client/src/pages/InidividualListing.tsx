import React from "react";

import { PropertyData } from "../models/Property";
import Gallery from "../components/Gallery/Gallery";

interface IndividualListingProps {
  listing: PropertyData;
}

const InidividualListing: React.FC<IndividualListingProps> = ({ listing }) => {
  return (
    <div style={{ width: "95%", margin: "0 auto", border: "1px solid #000" }}>
      <div className="mb-sizeMedium">
        <h2 className="text-xxl ">{listing.title}</h2>
        <p className="text-zinc-300 text-small">{listing.location.address}</p>
      </div>
      <div>
        <Gallery images={listing.images} />
      </div>
      <div>{/* price section */}</div>
      <div>{/* description */}</div>
      <div>{/* additional details */}</div>
    </div>
  );
};

export default InidividualListing;
