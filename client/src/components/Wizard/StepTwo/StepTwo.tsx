import React from "react";
import { Formik, Form, Field } from "formik";
import {
  WizardStepTwoProps,
  WizardStepTwoSchema,
} from "../../../schemas/WizardValidation";
import DropDown, {
  PropertyCategoryObject,
  PropertyTypeObject,
} from "../components/DropDown";
import { PropertyCategory, PropertyType } from "../../../models/Property";
import AdditionalInfoComponent from "../components/AdditionalInfoComponent";
import { usePropertyData } from "../../../context/PropertyContext";
import TextAreaField from "../../TextAreaField/TextAreaField";
import NextButton from "../components/NextButton";

interface StepTwoProps {
  onSubmit: (values: WizardStepTwoProps) => void;
}

const StepTwo: React.FC<StepTwoProps> = ({ onSubmit }) => {
  const { propertyData, setPropertyData } = usePropertyData();

  const propertyTypes: Array<PropertyTypeObject> = [
    {
      value: PropertyType.APARTMENT,
      displayText: "Apartment",
    },
    {
      value: PropertyType.HOUSE,
      displayText: "House",
    },
    {
      value: PropertyType.TERRACED_HOUSE,
      displayText: "Terraced House",
    },
    {
      value: PropertyType.ROOM,
      displayText: "Room",
    },
  ];

  const propertyCategories: Array<PropertyCategoryObject> = [
    {
      value: PropertyCategory.FAMILY_HOUSE,
      displayText: "Family House",
    },
    {
      value: PropertyCategory.YOUTH_HOUSING,
      displayText: "Youth Housing",
    },
    {
      value: PropertyCategory.SENIOR_HOUSING,
      displayText: "Senior Housing",
    },
    {
      value: PropertyCategory.CARE_HOME,
      displayText: "Care Home",
    },
  ];

  return (
    <div className="w-desktop m-auto">
      <div className="mb-sizeLarge text-center">
        <h2 className="text-xl">Step 2 of 3</h2>
      </div>
      <Formik
        initialValues={propertyData}
        validationSchema={WizardStepTwoSchema}
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
          <div className="flex flex-row gap-8 pb-sizeMedium">
            <DropDown placeholder="Type" name="type" data={propertyTypes} />
            <DropDown
              placeholder="Category"
              name="category"
              data={propertyCategories}
            />
          </div>
          <TextAreaField
            placeholder="Description"
            name="description"
            type="text"
          />
          <Field name="additionalInfo" component={AdditionalInfoComponent} />

          <NextButton />
        </Form>
      </Formik>
    </div>
  );
};

export default StepTwo;
