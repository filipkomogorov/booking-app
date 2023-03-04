import React from "react";
import { useField } from "formik";

interface TextField {
  placeholder?: string,
  name: string;
  type?: string;
}

const TextField: React.FC<TextField> = ({ ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className="pb-8">
              <div
        className={`rounded-xl border border-1 w-full h-16 flex flex-row items-center ${
          meta.touched && meta.error ? "border-error" : ""
        }`}
      >
        <div className="px-3 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8 "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
            />
          </svg>
        </div>

        <input
          {...field}
          {...props}
          value={field.value ? field.value : ""}
          className="border-0 focus:outline-none w-full pr-10"
        />
      </div>
      {meta.touched && meta.error && (
        <div className="text-error text-lg">{meta.error}</div>
      )}
    </div>
  );
};

export default TextField;
