import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import InidividualListing from "../components/IndividualListing/InidividualListing";
import {
  PropertyData,
} from "../models/Property";

import axios from "axios";

const Property = () => {
  const [propertyData, setPropertyData] = useState<PropertyData | undefined>(undefined)
  const { id } = useParams();

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
