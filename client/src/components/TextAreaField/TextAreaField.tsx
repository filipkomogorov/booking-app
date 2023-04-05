import { useField } from "formik";

interface TextAreaField {
  placeholder?: string;
  name: string;
  type?: string;
}

const TextAreaField: React.FC<TextAreaField> = ({ ...props }) => {
  const [field] = useField(props);

  return (
    <div className="pb-sizeMedium">
      <textarea
        {...field}
        {...props}
        value={field.value ? field.value : ""}
        className="rounded-xl border px-5 border-1 w-full h-textarea flex flex-column items-center"
      />
    </div>
  );
};

export default TextAreaField;
