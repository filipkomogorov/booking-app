import React from 'react'
import { usePropertyData } from '../../../context/PropertyContext'

const StepThree = () => {
  const {propertyData, setPropertyData} = usePropertyData()
  console.log(propertyData)
  return (
    <div>StepThree</div>
  )
}

export default StepThree