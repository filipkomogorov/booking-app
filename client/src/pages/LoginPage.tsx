import React from "react";
import { Form, Formik, FormikHelpers } from "formik";
import { loginSchema } from "../schemas/LoginValidation";
import { Login as loginSchemaTypes } from "../schemas/LoginValidation";
import TextField from "../components/TextField/TextField";
import { customSizes,} from "../types/Types";
import LogoSvg from "../components/Logo/LogoSvg";

const onSubmit = async (
  values: loginSchemaTypes,
  actions: FormikHelpers<loginSchemaTypes>
) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
};

const LoginPage = () => {
  return (
    <div className="w-login mx-auto bg-white py-10 px-20 rounded-3xl flex flex-col">
      <div className="flex items-center gap-3 mx-auto mb-10">
        <LogoSvg size='12'/>
        <span className="text-4xl">HeavenEstate</span>
      </div>
      <h3 className="text-center text-3xl font-semibold">Log in</h3>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={loginSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="flex flex-col">
            <TextField label="Email" name="email" type="email" />
            <TextField label="Password" name="password" type="password" />
            <button
              disabled={isSubmitting}
              type="submit"
              className={`${
                isSubmitting ? "bg-grey-300 text-black" : "bg-cta text-white"
              } rounded-lg px-7 `}
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginPage;
