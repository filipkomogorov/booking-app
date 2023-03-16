import * as yup from "yup";

export interface Register {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  confirmPassword: string;
}

export const registrationSchema = yup.object<Register>().shape({
  email: yup.string().email("Please enter a valid email").required("Required"),
  firstName: yup.string().required("Required"),
  lastName: yup.string().required("Required"),
  password: yup
    .string()
    .min(5, "Password too short")
    .required("Required")
    .test(
      "isValidPass",
      "Your password need to have lowercase, uppercase and a number",
      (value, context) => {
        const hasUpperCase = /[A-Z]/.test(value);
        const hasLowerCase = /[a-z]/.test(value);
        const hasNumber = /[0-9]/.test(value);
        let metConditions = 0;
        const conditions = [hasUpperCase, hasLowerCase, hasNumber];

        conditions.forEach((condition) => (condition ? metConditions++ : null));

        return metConditions === 3;
      }
    ),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), undefined], "Passwords must match")
    .required("Confirm password is required"),
});
