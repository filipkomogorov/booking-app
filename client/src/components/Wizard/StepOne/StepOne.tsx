import React from "react";
import { Form, Formik, useFormik } from "formik";
import {
  WizardStepOneProps,
  WizardStepOneSchema,
} from "../../../schemas/WizardValidation";
import TextField from "../../TextFields/TextFiled";
import AdvertisementType from "./AdvertisementType";
import { usePropertyData } from "../../../context/PropertyContext";

interface StepOneProps {
  onSubmit: (values: WizardStepOneProps) => void;
}

const StepOne: React.FC<StepOneProps> = ({ onSubmit }) => {
  const {propertyData, setPropertyData} = usePropertyData()
  const initialValues: WizardStepOneProps = {
    ...propertyData,
    advertisementType: undefined,
    title: "",
    price: 0,
    size: 0,
    rooms: undefined,
    deposit: 0,
    location: {
      city: "",
      address: "",
      zip: "",
      region: "",
    },
  };

  return (
    <div>
      <div>
        <h2>Step 1 of 3</h2>
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={WizardStepOneSchema}
        onSubmit={(values, actions) => {
          const updatedPropertyData = {
            ...propertyData,
            ...values
          }
          setPropertyData(updatedPropertyData)
          onSubmit(values);
          actions.setSubmitting(false);
        }}
      >
        <Form>
          <AdvertisementType name='advertisementType' />
          <TextField placeholder="Title" name="title" type="text" />
          <TextField placeholder="Price" name="price" type="number" />
          <TextField placeholder="Size" name='size' type='number' />
          <TextField placeholder="Rooms" name='rooms' type='number' />
          <TextField placeholder="City" name="location.city" type="text" />
          <TextField placeholder="Address" name="location.address" type="text" />
          <TextField placeholder="Zip" name="location.zip" type="text" />
          <TextField placeholder="Region" name="location.region" type="text" />
          <button type="submit">Next</button>
        </Form>
      </Formik>
    </div>
  );
};

export default StepOne;
