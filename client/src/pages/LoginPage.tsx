import LogoSvg from "../components/Logo/LogoSvg";
import { useContext, useEffect, useState } from "react";
import { Form, Formik, FormikHelpers } from "formik";
import { loginSchema } from "../schemas/LoginValidation";
import { Login as loginSchemaTypes } from "../schemas/LoginValidation";
import TextFieldWithIcon from "../components/TextFields/TextFieldWithIcon";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import Loading from "../components/Loading/Loading";

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);
  // TODO add enum for different errors
  const [loginErr, setLoginErr] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user]);

  const onSubmit = async (
    values: loginSchemaTypes,
    actions: FormikHelpers<loginSchemaTypes>
  ) => {
    setLoginErr(false);
    setLoading(true);
    // TODO make it a login hook
    try {
      const { email, password } = values;
      const response = await axios.post(
        "/login",
        {
          email,
          password,
        },
        { withCredentials: true }
      );
      setLoading(false);
      setUser(response.data);
      navigate("/");
    } catch (err) {
      // TODO handle the error if its 500
      setLoading(false);
      setLoginErr(true);
    }
  };

  return (
    <div className="w-login mx-auto bg-white mt-32 p-sizeLarge rounded-3xl flex flex-col">
      {loading ? (
        <Loading isLoading={loading} />
      ) : (
        <>
          <div className="flex items-center gap-3 mx-auto mb-10">
            <LogoSvg />
            <p className="leading-none pt-2 text-4xl">HeavenEstate</p>
          </div>
          <h3 className="text-center text-3xl font-semibold pb-12">Log in</h3>
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
                <TextFieldWithIcon
                  placeholder="Email"
                  name="email"
                  type="email"
                />
                <TextFieldWithIcon
                  placeholder="Password"
                  name="password"
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
                  Log in
                </button>
                {loginErr && (
                  <p className="text-base">Invalid email or password</p>
                )}
              </Form>
            )}
          </Formik>

          <div className="flex justify-center items-center mt-10">
            <Link to="/recover">Forgot Password?</Link>
          </div>
        </>
      )}
    </div>
  );
};

export default LoginPage;
