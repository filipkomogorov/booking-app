import React from "react";
import { usePropertyData } from "../../../context/PropertyContext";
import ImageUpload from "../components/ImageUpload";
import { WizardStepThreeProps, WizardStepThreeSchema } from "../../../schemas/WizardValidation";
import { Field, Form, Formik } from "formik";

interface StepThreeProps {
  onSubmit: (values: {images: string[]})=>void
}

const StepThree: React.FC<StepThreeProps> = ({ onSubmit }) => {
  const { propertyData, setPropertyData } = usePropertyData();
  const initialValues: WizardStepThreeProps = {
    images: [],
  };
  console.log(propertyData)
  return (
    <div>
      <div className="mb-sizeLarge text-center">
        <h2 className="text-xl">Step 3 of 3</h2>
      </div>
      <Formik 
      initialValues={initialValues}
      validationSchema={WizardStepThreeSchema}
      onSubmit={(values, actions)=>{
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
        <Field name='images' component={ImageUpload} />
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

export default StepThree;
