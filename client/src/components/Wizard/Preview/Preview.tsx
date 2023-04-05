import React from 'react'
import { usePropertyData } from '../../../context/PropertyContext'

const Preview = () => {
  const {propertyData} = usePropertyData()
  console.log(propertyData)
  return (
    <div>
      
    </div>
  )
}

export default Preview