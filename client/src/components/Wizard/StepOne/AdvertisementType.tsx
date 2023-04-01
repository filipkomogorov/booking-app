import React from "react";
import { Field, useField } from "formik";
import { AdvertisementType as AdvertisementTypeEnum } from "../../../models/Property";

interface AdvertisementTypeProps {
  name: string;
}

const AdvertisementType: React.FC<AdvertisementTypeProps> = ({ name }) => {
  const [field, meta] = useField(name);

  return (
    <div className="pb-sizeMedium">
      <div className="flex flex-row gap-2">
        <p>Choose an advertisement type:</p>
        <label className="pr-sizeMedium">
          <Field
            className="mr-sizeSmall"
            type="radio"
            name={name}
            value={AdvertisementTypeEnum.RENT}
          />
          Rent
        </label>
        <label>
          <Field
            className="mr-sizeSmall"
            type="radio"
            name={name}
            value={AdvertisementTypeEnum.SELL}
          />
          Sale
        </label>
      </div>
      {meta.touched && meta.error && (
        <div className="text-error text-lg">{meta.error}</div>
      )}
    </div>
  );
};

export default AdvertisementType;
