import React from "react";
import { useField } from "formik";

interface TextField {
  label: string;
  name: string;
  type?: string;
}

const TextField: React.FC<TextField> = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className="">
      <label htmlFor={props.name} className="block">
        {label}
      </label>
      <input
        {...field}
        {...props}
        value={field.value ? field.value : ""}
        className={`w-full border border-2 ${
          meta.touched && meta.error ? "border-error" : ""
        }`}
      />
      {meta.touched && meta.error && (
        <div className="text-error">{meta.error}</div>
      )}
    </div>
  );
};

export default TextField;
