import React, { useContext, useState } from "react";
import { PropertyData } from "../../models/Property";
import { WizardStepOneProps, WizardStepTwoProps } from "../../schemas/WizardValidation";
import Preview from "./Preview/Preview";
import StepOne from "./StepOne/StepOne";
import StepThree from "./StepThree/StepThree";
import StepTwo from "./StepTwo/StepTwo";
import { usePropertyData } from "../../context/PropertyContext";
import axios from "axios";

type stepInterface = {
  step: number,
  setStep: React.Dispatch<React.SetStateAction<number>>
}

const Wizard: React.FC<stepInterface> = ({step, setStep}) => {
  const {propertyData, setPropertyData} = usePropertyData()
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const handleSubmit = async() => {
    setIsLoading(true)

    try{
      const response = await axios.post('/add-listing', {...propertyData}, { withCredentials: true })
      console.log('HERE')
      console.log(response.data)
    }catch(err){
      console.error(err)
    }
  } 



  const onSubmitStepOne = (values: WizardStepOneProps) => {
    setPropertyData({ ...propertyData, ...values });

    handleStepNext();
  };

  const onSubmitStepTwo = (values: WizardStepTwoProps) => {
    setPropertyData({...propertyData, ...values})
    handleStepNext();
  }

  const onSubmitStepThree = (values: { images: string[] }) => {
    setPropertyData({...propertyData, ...values})
    handleStepNext();
  };

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
          <StepThree onSubmit={onSubmitStepThree} />
        </>
      );
    case 4:
      return (
        <>
          <Preview />
          <button onClick={()=>handleSubmit()}>Submit</button>
        </>
      );
    default:
      return null;
  }
};

export default Wizard;
