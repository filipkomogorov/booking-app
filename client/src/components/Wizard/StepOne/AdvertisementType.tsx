import React from "react";
import { Field, useField } from "formik";
import { AdvertisementType as AdvertisementTypeEnum } from "../../../models/Property";

interface AdvertisementTypeProps {
  name: string;
}

const AdvertisementType:React.FC<AdvertisementTypeProps> = ({name}) => {

  const [field, meta] = useField(name);

  return (
    <div>
      <label>
        <Field type="radio" name={name} value={AdvertisementTypeEnum.RENT} />
        For rent
      </label>
      <label>
        <Field type="radio" name={name} value={AdvertisementTypeEnum.SELL} />
        For sale
      </label>
      {meta.touched && meta.error && (
        <div className="text-error text-lg">{meta.error}</div>
      )}
    </div>
  );
};

export default AdvertisementType;
