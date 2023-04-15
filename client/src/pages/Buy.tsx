import React from 'react'
import { PropertyData } from '../models/Property'
import { PropertyType } from '../models/Property'
import { PropertyCategory } from '../models/Property'
import { AdvertisementType } from '../models/Property'

import image from "../assets/image.jpg";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import Card from '../components/Card/Card'

const properties: Array<PropertyData> = [
    {
      title: 'Two beroom house in Sydenham',
      images: [image, image1, image2, image3],
      location: {
        city: "Gabrovo",
        zip: "5300",
        region: "Gabrovo",
        address: "Tranito 941, st.th."
      },
      price: 5150000,
      size: 155,
      rooms: 3,
      type: PropertyType.HOUSE,
      category: PropertyCategory.FAMILY_HOUSE,
      advertisementType: AdvertisementType.SELL,
      contacts: {
        name: 'Filip Komogorov',
        email: 'filipsemail@mail.com',
        phoneNumber: '591281322'
      },
      
    },
    {
        title: 'Beatiful apartment in out Tokyo outscurts',
        images: [image1, image2, image3, image],
        location: {
          city: "Gabrovo",
          zip: "5300",
          region: "Gabrovo",
          address: "Tranito 941, st.th."
        },
        price: 4124677,
        size: 89,
        rooms: 2,
        type: PropertyType.APARTMENT,
        category: PropertyCategory.FAMILY_HOUSE,
        advertisementType: AdvertisementType.SELL,
        contacts: {
          name: 'Filip Komogorov',
          email: 'filipsemail@mail.com',
          phoneNumber: '591281322'
        },
        
      },
      {
        title: 'Vintage house in lively neighborhood',
        images: [image2, image3, image, image1],
        location: {
          city: "London",
          zip: "1000",
          region: "London",
          address: "Queen's Road 1"
        },
        price: 11659552,
        size: 206,
        rooms: 8,
        type: PropertyType.HOUSE,
        category: PropertyCategory.FAMILY_HOUSE,
        advertisementType: AdvertisementType.SELL,
        contacts: {
          name: 'Filip Komogorov',
          email: 'filipsemail@mail.com',
          phoneNumber: '591281322'
        },
      },

]

const Buy = () => {
  return (
    <div>
        Buy here

        <div>{properties.map((property,index) => (

            <Card property={property}/>
        ))}</div>
    </div>
  )
}

export default Buy