import React from "react";
import { useField } from "formik";

interface TextField {
  placeholder?: string;
  name: string;
  type?: string;
}

const TextField: React.FC<TextField> = ({ ...props }) => {
  const [field, meta] = useField(props);
  console.log(field.value)

  return (
    <div className="pb-8">
      <div
        className={`rounded-xl border px-5 border-1 w-full h-20 flex flex-column items-center ${
          meta.touched && meta.error ? "border-error" : ""
        }`}
      >
        <input
          {...field}
          {...props}
          value={field.value ? field.value : ""}
          className="border-0 focus:outline-none w-full"
        />
      </div>
      {meta.touched && meta.error && (
        <div className="text-error text-lg">{meta.error}</div>
      )}
    </div>
  );
};

export default TextField;
