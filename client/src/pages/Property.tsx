import React from "react";
import { useParams } from "react-router-dom";
import InidividualListing from "../components/IndividualListing/InidividualListing";
import { PropertyData, PropertyType, PropertyCategory, AdvertisementType } from "../models/Property";

import image from '../assets/image.jpg'
import image1 from '../assets/image1.jpg'
import image2 from '../assets/image2.jpg'
import image3 from '../assets/image3.jpg'

const Property = () => {
  const { id } = useParams();

  const mockData:PropertyData = {
    title: "Some test title",
    images: [image, image1, image2, image3 ],
    location: {
        address: "Borovska N1",
        city: "Gabrovo",
        zip: '5300',
        region: "Gabrovo"
    },
    description: "Lorem ipsum dajsd jsdi jj dxlzca",
    price: 150000,
    size: 150,
    rooms: 3,
    type: PropertyType.APARTMENT,
    category: PropertyCategory.FAMILY_HOUSE,
    advertisementType: AdvertisementType.SELL,
    additionalInfo: [],
  }

  // use the id to fetch the property by propertyId
  // pass the fetched property data to the individualListing component
  return (
  <div style={{width: '110rem', margin: '0 auto'}}>
    Property - {id}

    <InidividualListing listing={mockData} />
  </div>);
};

export default Property;
