import { useField, useFormik } from "formik";
import React from "react";

export interface CheckBoxProps {
  name: string;
  checked?: boolean;
  value: string;
  onChange: (value: string, checked: boolean) => void;
}

const CheckBox: React.FC<CheckBoxProps> = ({
  name,
  checked,
  value,
  onChange
}) => {

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(value, event.target.checked)
  }

  return (
    <label style={{width: '15rem'}}>
      <input
        className="mr-sizeSmall"
        name={value}
        type="checkbox"
        checked={checked}
        onChange={handleChange}
      />
      <span>{name}</span>
    </label>
    )
  };

export default CheckBox;
