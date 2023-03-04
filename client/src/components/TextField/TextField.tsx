import { useField } from "formik";
import { TextFieldProps } from "../../types/types";

const TextField = ({...props }: TextFieldProps) => {
  const [field, meta, helpers] = useField(props);
  return (
    <label>
      {props.label}
      <input
        {...field}
        {...props}
        value={field.value ? field.value : ""}
        onBlur={() => helpers.setTouched(true)}
        onChange={(event) => helpers.setValue(event.target.value)}
        className={`border border-2 ${
          meta.touched && meta.error ? "border-error" : ""
        }`}
      />
      {meta.touched && meta.error && (
        <div className="text-error">{meta.error}</div>
      )}
    </label>
  );
};

export default TextField;
