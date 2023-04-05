import { useState } from "react";
import Wizard from "../components/Wizard/Wizard";
import { PropertyDataProvider } from "../context/PropertyContext";

const AddProeprty = () => {
  const [step, setStep] = useState<number>(1);
  const handleStepBack = () => {
    setStep(step - 1);
  };

  return (
    <div className="w-desktop h-addListingHeight mx-auto my-sizeXl bg-white p-sizeLarge">
      {step !== 1 && (
        <div
          className="inline-flex flex-row items-center gap-2 cursor-pointer"
          onClick={handleStepBack}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
            />
          </svg>

          <span>Back</span>
        </div>
      )}
      <h2 className="mb-sizeLarge text-xxl text-center">
        Let's add a property
      </h2>
      <PropertyDataProvider>
        <Wizard step={step} setStep={setStep} />
      </PropertyDataProvider>
    </div>
  );
};

export default AddProeprty;
