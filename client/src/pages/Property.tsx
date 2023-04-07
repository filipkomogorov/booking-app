import React from "react";
import { useParams } from "react-router-dom";
import InidividualListing from "../components/IndividualListing/InidividualListing";
import {
  PropertyData,
  PropertyType,
  PropertyCategory,
  AdvertisementType,
} from "../models/Property";

import image from "../assets/image.jpg";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import { AdditionalInfo } from "../models/Property.enum";

const Property = () => {
  const { id } = useParams();

  const mockData: PropertyData = {
    title: "Some test title",
    images: [image, image1, image2, image3, image],
    location: {
      address: "Borovska N1",
      city: "Gabrovo",
      zip: "5300",
      region: "Gabrovo",
    },
    description:
      "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful",
    price: 150000,
    size: 150,
    rooms: 3,
    deposit: 1235512,
    type: PropertyType.APARTMENT,
    category: PropertyCategory.FAMILY_HOUSE,
    advertisementType: AdvertisementType.RENT,
    additionalInfo: [AdditionalInfo.BALCONY, AdditionalInfo.STOVE],
    contacts: {
      name: "Filip Komogorov",
      email: "filipemail@mail.com",
      phoneNumber: "+45 123 180",
    },
  };

  // use the id to fetch the property by propertyId
  // pass the fetched property data to the individualListing component
  return (
    <div style={{ width: "120rem", margin: "0 auto", marginTop: "3rem", marginBottom: '6rem' }}>
      <InidividualListing listing={mockData} />
    </div>
  );
};

export default Property;
