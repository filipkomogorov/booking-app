import React, { useContext, useState } from "react";
import {
  WizardStepOneProps,
  WizardStepTwoProps,
} from "../../schemas/WizardValidation";
import Preview from "./Preview/Preview";
import StepOne from "./StepOne/StepOne";
import StepThree from "./StepThree/StepThree";
import StepTwo from "./StepTwo/StepTwo";
import { usePropertyData } from "../../context/PropertyContext";
import Loading from "../Loading/Loading";
import axios from "axios";
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import { AdvertisementType } from "../../models/Property";

type stepInterface = {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
};

const Wizard: React.FC<stepInterface> = ({ step, setStep }) => {
  const { propertyData, setPropertyData } = usePropertyData();
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const {user} = useContext(UserContext)
  const handleSubmit = async () => {
    setIsLoading(true);

  try {
    const response = await axios.post(
      "/add-listing",
      { ...propertyData,
      contacts: {
        name: `${user?.firstName} ${user?.lastName}`,
        email: user?.email,
        phoneNumber: user?.phoneNumber
      }
      },
      { withCredentials: true }
      );
      if(response){
        if(response.data.advertisementType === AdvertisementType.SELL){
          navigate(`/buy/${response.data._id}`)
        }else{
          navigate(`/rent/${response.data._id}`)
        }
      }
    setIsLoading(false);
  } catch (err) {
    console.error(err);
    setIsLoading(false);
    // show error for user
  }
  };

  const onSubmitStepOne = (values: WizardStepOneProps) => {
    setPropertyData({ ...propertyData, ...values });

    handleStepNext();
  };

  const onSubmitStepTwo = (values: WizardStepTwoProps) => {
    setPropertyData({ ...propertyData, ...values });
    handleStepNext();
  };

  const onSubmitStepThree = (values: { images: string[] }) => {
    setPropertyData({ ...propertyData, ...values });
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
      return isLoading ? (
        <Loading isLoading={isLoading} />
      ) : (
        <>
          <Preview />
          <div className="w-full flex justify-center mt-sizeDoubleXl">
            <button onClick={() => handleSubmit()} type="submit" className="btwWizard">
              Submit
            </button>
          </div>
        </>
      );
    default:
      return null;
  }
};

export default Wizard;
