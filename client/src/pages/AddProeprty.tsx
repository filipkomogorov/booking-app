import Wizard from "../components/Wizard/Wizard";
import { PropertyDataProvider } from "../context/PropertyContext";

const AddProeprty = () => {
  return (
    <div className="w-desktop mx-auto mt-sizeXl bg-white p-sizeMedium">
      <h2>Let's add a Property</h2>
      <PropertyDataProvider>
        <Wizard />
      </PropertyDataProvider>
    </div>
  );
};

export default AddProeprty;
