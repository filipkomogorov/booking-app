import React from 'react'
import { Formik, Form } from 'formik'
import { WizardStepTwoProps, WizardStepTwoSchema } from '../../../schemas/WizardValidation'
import TextField from '../../TextFields/TextFiled'
import DropDown, { PropertyCategoryObject, PropertyTypeObject } from '../components/DropDown'
import { PropertyCategory, PropertyType } from '../../../models/Property'
import AdditionalInfo from '../components/AdditionalInfoComponent'

interface StepTwoProps {
  onSubmit: (values: WizardStepTwoProps) => void
}

const StepTwo: React.FC<StepTwoProps> = ({onSubmit}) => {
  const initialValues: WizardStepTwoProps = {
    size: '',
    rooms: undefined,
    type: undefined,
    category: undefined,
    additionalInfo: undefined
  }

  const propertyTypes:Array<PropertyTypeObject> = [
    {
      value: PropertyType.APARTMENT,
      displayText: 'Apartment'
    },
    {
      value: PropertyType.HOUSE,
      displayText: 'House'
    },
    {
      value: PropertyType.TERRACED_HOUSE,
      displayText: 'Terraced House'
    },
    {
      value: PropertyType.ROOM,
      displayText: 'Room'
    },
  ]

  const propertyCategories:Array<PropertyCategoryObject> = [
    {
      value: PropertyCategory.FAMILY_HOUSE,
      displayText: 'Family House'
    },
    {
      value: PropertyCategory.YOUTH_HOUSING,
      displayText: 'Youth Housing'
    },
    {
      value: PropertyCategory.SENIOR_HOUSING,
      displayText: 'Senior Housing'
    },
    {
      value: PropertyCategory.CARE_HOME,
      displayText: 'Care Home'
    },
  ]


  return (
    <div>
      <div>
        <h2>Step 2 of 3</h2>
      </div>
      <Formik
      initialValues={initialValues}
      validationSchema={WizardStepTwoSchema}
      onSubmit={(values, actions)=> {
        console.log(values)
        onSubmit(values)
        actions.setSubmitting(false)
      }}
      >
        <Form>
          <TextField placeholder="Size" name='size' type='text' />
          <TextField placeholder="Rooms" name='rooms' type='number' />

          <DropDown placeholder="Type" name='type' data={propertyTypes}/>
          <DropDown placeholder="Category" name='category' data={propertyCategories}/>
          <AdditionalInfo />
          {/* Add a section with checkboxes for the additiona info */}
          <button type="submit">Next</button>
        </Form>
      </Formik>
    </div>
  )
}

export default StepTwo