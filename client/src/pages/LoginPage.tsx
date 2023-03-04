import React from "react";
import { loginSchema } from "../schemas/LoginValidation";
import { useFormik, FormikHelpers } from "formik";
import { Login as loginSchemaTypes } from "../schemas/LoginValidation";

const onSubmit = async (
  values: loginSchemaTypes,
  actions: FormikHelpers<loginSchemaTypes>
) => {
  console.log(values);
  console.log(actions);
  await new Promise((resolve)=>setTimeout(resolve, 1000))
  actions.resetForm()
};

const LoginPage = () => {
  const { values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: loginSchema,
      onSubmit,
    });

  return (
    <div>
      <form onSubmit={handleSubmit} className='flex flex-col max-w-2xl mx-auto gap-3'>
        {/* TODO Create custom text component */}
        <label>Email:</label>
        <input
          name="email"
          type="email"
          onChange={handleChange}
          value={values.email}
          onBlur={handleBlur}
          className={`border border-2 ${
            errors.email && touched.email ? "border-error" : ""
          }`}
        />
        {errors.email && touched.email && (
          <span className="text-error">{errors.email}</span>
        )}
        <label>Password:</label>
        <input
          type="password"
          name="password"
          onChange={handleChange}
          value={values.password}
          onBlur={handleBlur}
          className={`border border-2 ${
            errors.password && touched.password ? "border-error" : ""
          }`}
        />
        {errors.password && touched.password && (
          <span className="text-error">{errors.password}</span>
        )}
        {/* TODO replace the text inside with spinner when isSubmitting */}
        <button disabled={isSubmitting} type="submit" className={`py-3 rounded-lg ${isSubmitting ? 'border bg-grey-300 text-black' : 'bg-cta text-white'}`}>
          Log in
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
