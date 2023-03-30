import React from "react";
import { useField } from "formik";
import { PropertyCategory, PropertyType } from "../../../models/Property";

export interface PropertyTypeObject {
  value: PropertyType;
  displayText: string;
}

export interface PropertyCategoryObject {
  value: PropertyCategory;
  displayText: string
}

interface DropDownProps {
  name: string;
  data: Array<PropertyTypeObject> | Array<PropertyCategoryObject>;
  placeholder: string;
}

const DropDown: React.FC<DropDownProps> = ({ name, data, placeholder }) => {
  const [field, meta] = useField(name);

  return (
    <div>
      <select {...field} name={name} defaultValue="">
        <option value="" disabled>
          Select {placeholder}
        </option>
        {data.map((item, index) => (
          <option key={index} value={item.value}>
            {item.displayText}
          </option>
        ))}
      </select>
      {meta.touched && meta.error && (
        <div className="text-error text-lg">{meta.error}</div>
      )}
    </div>
  );
};

export default DropDown;
