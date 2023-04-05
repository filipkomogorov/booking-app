import React from "react";
import { Form, Formik, useField, useFormik } from "formik";
import {
  WizardStepOneProps,
  WizardStepOneSchema,
} from "../../../schemas/WizardValidation";
import TextField from "../../TextFields/TextFiled";
import AdvertisementType from "./AdvertisementType";
import { usePropertyData } from "../../../context/PropertyContext";
import ConditionalDepositField from "../../ConditionalDepositField/ConditionalDepositField";

interface StepOneProps {
  onSubmit: (values: WizardStepOneProps) => void;
}

const StepOne: React.FC<StepOneProps> = ({ onSubmit }) => {
  const { propertyData, setPropertyData } = usePropertyData();

  const initialValues: WizardStepOneProps = {
    advertisementType: undefined,
    title: "",
    price: undefined,
    size: undefined,
    rooms: undefined,
    deposit: 0,
    location: {
      city: "",
      address: "",
      zip: "",
      region: "",
    },
  };

  const valuesWithContext = {
    ...initialValues,
    ...propertyData,
  };

  return (
    <div>
      <div className="mb-sizeLarge text-center">
        <h2 className="text-xl">Step 1 of 3</h2>
      </div>
      <Formik
        initialValues={valuesWithContext}
        validationSchema={WizardStepOneSchema}
        onSubmit={(values, actions) => {
          const updatedPropertyData = {
            ...propertyData,
            ...values,
          };
          setPropertyData(updatedPropertyData);
          onSubmit(values);
          actions.setSubmitting(false);
        }}
      >
        <Form>
          <div className="pb-sizeXl">
            <AdvertisementType name="advertisementType" />
            <TextField placeholder="Title" name="title" type="text" />
            <TextField placeholder="Price" name="price" type="number" />
            <ConditionalDepositField
              advertisementTypeFieldName="advertisementType"
              depositFieldName="deposit"
            />
            <TextField placeholder="Size" name="size" type="number" />
            <TextField placeholder="Rooms" name="rooms" type="number" />
            <TextField placeholder="City" name="location.city" type="text" />
            <TextField
              placeholder="Address"
              name="location.address"
              type="text"
            />
            <TextField placeholder="Zip" name="location.zip" type="text" />
            <TextField
              placeholder="Region"
              name="location.region"
              type="text"
            />
          </div>
          <div className="w-full flex justify-center">
            <button type="submit" className="btwWizard">
              Next
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default StepOne;
