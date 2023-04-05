import React from 'react'
import { usePropertyData } from '../../../context/PropertyContext'

const Preview = () => {
  const {propertyData} = usePropertyData()
  console.log(propertyData)
  return (
    <div>
      {propertyData?.images.map((item, key)=>(
        <img src={item} />
      ))}
    </div>
  )
}

export default Preview