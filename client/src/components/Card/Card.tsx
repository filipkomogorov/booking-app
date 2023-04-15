import React from 'react'

import { PropertyData } from '../../models/Property'

interface CardProps {
    property: PropertyData
}

const Card:React.FC<CardProps> = ({property}) => {
    console.log(property)
  return (
    <div>
        <div>
            <img src={property.images[0]} alt="" />
        </div>
        <div>
            <p>{property.title}</p>
            <p>{property.price}</p>
            <p>{property.size}m2</p>
            <p>{`${property.location.address}, ${property.location.city}`}</p>
        </div>
    </div>
  )
}

export default Card