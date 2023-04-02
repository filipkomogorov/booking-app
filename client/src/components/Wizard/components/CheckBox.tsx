import { useField } from 'formik'
import React from 'react'

export interface CheckBoxProps {
    name: string
    label: string
}

const CheckBox:React.FC<CheckBoxProps> = ({name, label}) => {
  const [field] = useField(name)
  return (
    <label>
        <input className='mr-sizeSmall' name={name} type='checkbox' value={field.value ? field.value: false}/>
        <span>{label}</span>
    </label>

  )
}

export default CheckBox