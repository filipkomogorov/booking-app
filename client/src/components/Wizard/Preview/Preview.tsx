import React from 'react'
import { usePropertyData } from '../../../context/PropertyContext'
import InidividualListing from '../../../pages/InidividualListing'

const Preview = () => {
  const {propertyData} = usePropertyData()
  console.log(propertyData)
  return (
    <div>
       <InidividualListing listing={propertyData} />
    </div>
  )
}

export default Preview