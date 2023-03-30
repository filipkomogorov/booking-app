import React from 'react'

export interface CheckBoxProps {
    name: string
    label: string
}

const CheckBox:React.FC<CheckBoxProps> = ({name, label}) => {
  return (
    <label>
        <span>{label}</span>
        <input name={name} type='checkbox'/>
    </label>

  )
}

export default CheckBox