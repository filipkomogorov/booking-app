import React, { useEffect, useState } from "react";
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
import axios from "axios";

const Property = () => {
  const [propertyData, setPropertyData] = useState<PropertyData | undefined>(undefined)
  const { id } = useParams();
  console.log(id)

  const searchProperty = async (id:string | undefined)=>{
    if(id){
      try{
        const response = await axios.get('/search-property', {
          params: {
            id
          }
        })
        setPropertyData(response.data)
      }catch(err){
        console.log('error fetching property', err)
      }
    }
  }
  useEffect(()=>{
    searchProperty(id)
  }, [])

  return (
    <div style={{ width: "120rem", margin: "0 auto", marginTop: "3rem", marginBottom: '6rem' }}>
      <InidividualListing listing={propertyData} />
    </div>
  );
};

export default Property;
