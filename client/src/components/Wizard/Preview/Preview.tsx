import React from 'react'
import { usePropertyData } from '../../../context/PropertyContext'
import InidividualListing from '../../IndividualListing/InidividualListing'

const Preview = () => {
  const {propertyData} = usePropertyData()
  console.log(propertyData)
  return (
    <div style={{width: "120rem", margin: "0 auto"}}>
      <p style={{fontSize: '2rem', textAlign: 'center', marginBottom: '3rem'}}>Preview before submitting</p>

       <InidividualListing listing={propertyData} />
    </div>
  )
}

export default Preview