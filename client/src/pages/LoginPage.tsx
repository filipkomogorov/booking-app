import React from "react";
import { loginSchema } from "../schemas/LoginValidation";
import { useFormik } from "formik";

const onSubmit = () => {
  console.log("submitted");
};

const LoginPage = () => {
  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: loginSchema,
      onSubmit,
    });

  console.log(errors);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* TODO Create custom text component */}
        <label>Email:</label>
        <input
          name="email"
          type="email"
          onChange={handleChange}
          value={values.email}
          onBlur={handleBlur}
          className={`border border-2 ${
            errors.email && touched.email ? "border-error" : ""}`}
        />
        {errors.email && touched.email && <span className="text-error">{errors.email}</span>}
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
        {errors.password && touched.password && <span className="text-error">{errors.password}</span>}

        <button type="submit" className="border">
          Submit
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
