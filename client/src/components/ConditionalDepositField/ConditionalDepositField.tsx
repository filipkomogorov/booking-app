import { useField } from "formik";
import React from "react";
import { AdvertisementType } from "../../models/Property";
import TextField from "../TextFields/TextFiled";

interface ConditionalDepositFieldProps {
  advertisementTypeFieldName: string;
  depositFieldName: string;
}

const ConditionalDepositField: React.FC<ConditionalDepositFieldProps> = ({
  advertisementTypeFieldName,
  depositFieldName,
}) => {
    const [advertisementTypeField] = useField(advertisementTypeFieldName)
  return <div>
        {advertisementTypeField.value === AdvertisementType.RENT && (
            <TextField placeholder='Deposit' name={depositFieldName} type='number'/>
        )}
  </div>;
};

export default ConditionalDepositField;
