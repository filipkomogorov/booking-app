import React from "react";

import { PropertyData } from "../../models/Property";
import Gallery from "../Gallery/Gallery";
import ListingDetails from "../ListingDetails/ListingDetails";
import Details from "../ListingDetails/Details";
import Description from "../ListingDetails/Description";

interface IndividualListingProps {
  listing?: PropertyData;
}

const InidividualListing: React.FC<IndividualListingProps> = ({ listing }) => {
  return !!listing ? (
    <div style={{ width: "95%", margin: "0 auto"}} >
      <div className="mb-sizeMedium">
        <h2 className="text-xxl ">{listing.title}</h2>
        <p className="text-zinc-300 text-small">{listing.location.address}</p>
      </div>

      <div className="flex flex-wrap">
        <div className="flex flex-col" style={{width: "70%"}}>
          <Gallery images={listing.images} />
          <Description description={listing.description} />
          <Details additionalInfo={listing.additionalInfo}/>
        </div>
        <div className="flex flex-col" style={{width: "30%"}}>
          <ListingDetails listing={listing} />
        </div>

      </div>
    </div>
  ) : null;
};

export default InidividualListing;
