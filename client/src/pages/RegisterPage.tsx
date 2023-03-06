import { Form, Formik, FormikHelpers } from "formik";
import { Register as registerSchemaTypes, registrationSchema } from "../schemas/RegisterValidation";
import TextField from "../components/TextField/TextField";
import { Link } from "react-router-dom";

import LogoSvg from "../components/Logo/LogoSvg";

const onSubmit = async (
  values: registerSchemaTypes,
  actions: FormikHelpers<registerSchemaTypes>
) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
};

const RegisterPage = () => {
  return (
    <div className="w-login mx-auto bg-white mt-32 py-10 px-20 rounded-3xl flex flex-col">
      <div className="flex items-center gap-3 mx-auto mb-10">
        <LogoSvg />
        <p className="leading-none pt-2 text-4xl">HeavenEstate</p>
      </div>
      <h3 className="text-center text-3xl font-semibold pb-12">Create an account</h3>
      <Formik
        initialValues={{
          email: "",
          password: "",
          confirmPassword: ""
        }}
        validationSchema={registrationSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="flex flex-col">
            <TextField placeholder='Email' name="email" type="email" />
            <TextField placeholder='Password' name="password" type="password" />
            <TextField placeholder='Repeat Password' name="confirmPassword" type="password" />
            <button
              disabled={isSubmitting}
              type="submit"
              className={`${
                isSubmitting ? "border border-1 bg-grey-300 text-black" : "bg-cta text-white"
              } rounded-xl px-7 h-20`}
            >
              Register
            </button>
          </Form>
        )}
      </Formik>

      <div className="flex justify-center items-center mt-10">
        <p className="pr-1 ">Already have an account? </p>
         <Link className="text-link font-bold" to='/login'>Log in</Link>
      </div>
    </div>
  );
};

export default RegisterPage;
