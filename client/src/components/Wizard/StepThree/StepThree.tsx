import React from "react";
import { usePropertyData } from "../../../context/PropertyContext";
import ImageUpload from "../components/ImageUpload";
import {
  WizardStepThreeProps,
  WizardStepThreeSchema,
} from "../../../schemas/WizardValidation";
import { Field, Form, Formik } from "formik";
import NextButton from "../components/NextButton";

interface StepThreeProps {
  onSubmit: (values: { images: string[] }) => void;
}

const StepThree: React.FC<StepThreeProps> = ({ onSubmit }) => {
  const { propertyData, setPropertyData } = usePropertyData();
  const initialValues: WizardStepThreeProps = {
    images: [],
  };
  return (
    <div>
      <div className="mb-sizeLarge text-center">
        <h2 className="text-xl">Step 3 of 3</h2>
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={WizardStepThreeSchema}
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
          <Field name="images" component={ImageUpload} />
          <NextButton />
        </Form>
      </Formik>
    </div>
  );
};

export default StepThree;
