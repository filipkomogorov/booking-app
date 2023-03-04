import React from "react";
import { loginSchema } from "../schemas/LoginValidation";
import { Formik, useFormik, FormikHelpers, Field } from "formik";
import { Login as loginSchemaTypes } from "../schemas/LoginValidation";
import TextField from "../components/TextField/TextField";

const onSubmit = async (
  values: loginSchemaTypes,
  actions: FormikHelpers<loginSchemaTypes>
) => {
  console.log(values);
  console.log(actions);
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
};

const initialValues = {
  email: "",
  password: "",
};

const LoginPage = () => {
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit,
  });

  return (
    <div>
      <Formik
        initialValues={{ ...initialValues }}
        onSubmit={async (values, actions) => {
          await new Promise((resolve) => setTimeout(resolve, 1000));
          actions.resetForm();
        }}
      >
        {(props) => (
          <form
            onSubmit={props.handleSubmit}
            className="flex flex-col max-w-2xl mx-auto gap-3"
          >

            <TextField
              label="Email"
              name="email"
              type="email"
              placeholder="John.Doe@gmail.com"
            />
          </form>
        )}
      </Formik>
    </div>

  );
};

export default LoginPage;
