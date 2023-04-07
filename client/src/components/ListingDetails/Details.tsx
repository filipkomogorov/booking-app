import React from "react";
import { AdditionalInfo } from "../../models/Property.enum";
import { additionalInfoNames } from "../../utils/utils";
import CheckBox from "../Wizard/components/CheckBox";

interface DetailsProps {
  additionalInfo?: Array<AdditionalInfo>;
}

const isChecked = (additionalInfo: Array<AdditionalInfo> | undefined,value:AdditionalInfo):boolean =>{
    if(!additionalInfo){
        return false
    }else{
        return additionalInfo.includes(value)
    }
}

const Details: React.FC<DetailsProps> = ({ additionalInfo }) => {
  return (
    <div style={{ backgroundColor: "#F6F5F7" }} className="p-sizeLarge flex flex-wrap gap-2 pb-sizeXl">
      {Object.entries(additionalInfoNames).map(([key, label]) => (
        <CheckBox onChange={() => {}} key={key} name={label} value={key} disabled={true} checked={isChecked(additionalInfo, key as AdditionalInfo )}/>
      ))}
    </div>
  );
};

export default Details;
