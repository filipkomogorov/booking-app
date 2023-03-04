import { FieldInputProps, FormikHandlers } from 'formik';

export interface TextFieldProps extends FieldInputProps<string> {
    label?: string;
    type?: string;
    placeholder?: string;
  }