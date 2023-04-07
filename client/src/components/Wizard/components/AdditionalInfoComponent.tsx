import React from "react";
import { AdditionalInfo } from "../../../models/Property.enum";
import { FieldProps } from "formik";
import CheckBox from "./CheckBox";
import { usePropertyData } from "../../../context/PropertyContext";
import { additionalInfoNames } from "../../../utils/utils";

const AdditionalInfoComponent = ({ field, form }: FieldProps) => {
  const { propertyData, setPropertyData } = usePropertyData();

  const isChecked = (value: AdditionalInfo): boolean | undefined=> {
    return propertyData.additionalInfo && propertyData.additionalInfo.includes(value);
  };

  const handleCheckBoxChange = (value: string, checked: boolean) => {
    let newValue;
    if (checked) {
      newValue = [...(field.value || []), value];
    } else {
      newValue = field.value.filter((item: string) => item !== value);
    }
    form.setFieldValue(field.name, newValue);
    setPropertyData({ ...propertyData, additionalInfo: newValue });
  };

  return (
    <div className="flex flex-wrap gap-2 pb-sizeXl">
      {Object.entries(additionalInfoNames).map(([key, label]) => (
        <CheckBox
          onChange={handleCheckBoxChange}
          key={key}
          name={label}
          value={key}
          checked={isChecked(key as AdditionalInfo)}
        />
      ))}
    </div>
  );
};

export default AdditionalInfoComponent;
