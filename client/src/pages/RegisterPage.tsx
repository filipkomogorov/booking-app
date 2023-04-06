import { Form, Formik, FormikHelpers } from "formik";
import {
  Register as registerSchemaTypes,
  registrationSchema,
} from "../schemas/RegisterValidation";
import TextField from "../components/TextFields/TextFiled";
import { Link, useNavigate } from "react-router-dom";

import LogoSvg from "../components/Logo/LogoSvg";
import axios from "axios";
import { UserContext } from "../context/UserContext";
import { useContext, useEffect, useState } from "react";
import Loading from "../components/Loading/Loading";

const RegisterPage = () => {
  const { user, setUser } = useContext(UserContext);
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user]);

  const onSubmit = async (
    values: registerSchemaTypes,
    actions: FormikHelpers<registerSchemaTypes>
  ) => {
    // TODO make it a register hook
    setLoading(true);
    try {
      const { email, password, firstName, lastName } = values;
      const response = await axios.post(
        "/register",
        {
          email,
          password,
          firstName,
          lastName,
        },
        { withCredentials: true }
      );
      setLoading(false);
      setUser(response.data);
      navigate("/");
    } catch (err) {
      setLoading(false);
      // TODO handle error
      alert("registration failed");
    }
  };

  return (
    <div className="w-login mx-auto bg-white mt-32 py-10 px-20 rounded-3xl flex flex-col">
      {loading ? (
        <Loading isLoading={loading} />
      ) : (
        <>
          <div className="flex items-center gap-3 mx-auto mb-10">
            <LogoSvg />
            <p className="leading-none pt-2 text-4xl">HeavenEstate</p>
          </div>
          <h3 className="text-center text-3xl font-semibold pb-12">
            Create an account
          </h3>
          <Formik
            initialValues={{
              email: "",
              firstName: "",
              lastName: "",
              password: "",
              confirmPassword: "",
            }}
            validationSchema={registrationSchema}
            onSubmit={onSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="flex flex-col">
                <TextField placeholder="Email" name="email" type="email" />
                <TextField
                  placeholder="First Name"
                  name="firstName"
                  type="text"
                />
                <TextField
                  placeholder="Last name"
                  name="lastName"
                  type="text"
                />
                <TextField
                  placeholder="Password"
                  name="password"
                  type="password"
                />
                <TextField
                  placeholder="Repeat Password"
                  name="confirmPassword"
                  type="password"
                />
                <button
                  disabled={isSubmitting}
                  type="submit"
                  className={`${
                    isSubmitting
                      ? "border border-1 bg-grey-300 text-black"
                      : "bg-cta text-white"
                  } rounded-xl px-7 h-20`}
                >
                  Register
                </button>
              </Form>
            )}
          </Formik>

          <div className="flex justify-center items-center mt-10">
            <p className="pr-1 ">Already have an account? </p>
            <Link className="text-link font-bold" to="/login">
              Log in
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default RegisterPage;
