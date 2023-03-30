import React from "react";
import { AdditionalInfo } from "../../../models/Property";
import CheckBox, { CheckBoxProps } from "./CheckBox";

const additionalInfo: Array<CheckBoxProps> = [
  {
    name: "basemenet",
    label: "Basemenet",
  },
  {
    name: "balcony",
    label: "Balcony",
  },
  {
    name: "elevator",
    label: "Elevator",
  },
  {
    name: "ownBath",
    label: "Own Bath",
  },
  {
    name: "stove",
    label: "Stove",
  },
  {
    name: "ownKitchen",
    label: "Own Kitchen",
  },
  {
    name: "ownToilet",
    label: "Own Toilet",
  },
  {
    name: "refrigerator",
    label: "Refrigerator",
  },
  {
    name: "petsAllowed",
    label: "Pets Allowed",
  },
  {
    name: "sharedLaundry",
    label: "Shared Laundry",
  },
];

const AdditionalInfoComponent = () => {
  return (
    <div>
      {additionalInfo.map((el, index) => (
        <CheckBox key={index} name={el.name} label={el.label} />
      ))}
    </div>
  );
};

export default AdditionalInfoComponent;
