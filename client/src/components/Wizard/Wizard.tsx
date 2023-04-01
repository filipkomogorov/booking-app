import React, { useState } from "react";
import { AdditionalInfo, PropertyData } from "../../models/Property";
import { WizardStepOneProps, WizardStepTwoProps } from "../../schemas/WizardValidation";
import Preview from "./Preview/Preview";
import StepOne from "./StepOne/StepOne";
import StepThree from "./StepThree/StepThree";
import StepTwo from "./StepTwo/StepTwo";

type stepInterface = {
  step: number,
  setStep: React.Dispatch<React.SetStateAction<number>>
}

const Wizard: React.FC<stepInterface> = ({step, setStep}) => {

  const [propertyData, setPropertyData] = useState({});
  const [additionalData, setAdditionalData] = useState<AdditionalInfo>(
    {} as AdditionalInfo
  );

  const onSubmitStepOne = (values: WizardStepOneProps) => {
    setPropertyData({ ...propertyData, ...values });

    handleStepNext();
  };

  const onSubmitStepTwo = (values: WizardStepTwoProps) => {
    setPropertyData({...propertyData, ...values})
    handleStepNext();
  }

  const handleStepNext = () => {
    setStep(step + 1);
  };

  switch (step) {
    case 1:
      return (
        <>
          <StepOne onSubmit={onSubmitStepOne} />
        </>
      );
    case 2:
      return (
        <>
          <StepTwo onSubmit={onSubmitStepTwo} />
        </>
      );
    case 3:
      return (
        <>
          <StepThree />

          <button onClick={handleStepNext}>Next</button>
        </>
      );
    case 4:
      return (
        <>
          <Preview />
          <button>Submit</button>
        </>
      );
    default:
      return null;
  }
};

export default Wizard;
