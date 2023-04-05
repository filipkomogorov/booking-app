import React from "react";
import { AdditionalInfo } from "../../../models/Property.enum";
import { FieldProps } from "formik";
import CheckBox from "./CheckBox";
import { usePropertyData } from "../../../context/PropertyContext";

const AdditionalInfoComponent = ({ field, form }: FieldProps) => {
  const { propertyData, setPropertyData } = usePropertyData();
  const additionalInfoNames: { [key in AdditionalInfo]: string } = {
    [AdditionalInfo.BALCONY]: "Balcony",
    [AdditionalInfo.BASEMENT]: "Basement",
    [AdditionalInfo.ELEVATOR]: "Elevator",
    [AdditionalInfo.OWN_BATH]: "Own Bath",
    [AdditionalInfo.OWN_KITCHEN]: "Own Kitchen",
    [AdditionalInfo.OWN_TOILET]: "Own Toilet",
    [AdditionalInfo.PETS_ALLOWED]: "Pets Allowed",
    [AdditionalInfo.REFRIGERATOR]: "Refrigerator",
    [AdditionalInfo.SHARED_LAUNDRY]: "Shared Laundry",
    [AdditionalInfo.STOVE]: "Stove",
  };

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
    <div>
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
