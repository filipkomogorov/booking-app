import * as yup from 'yup'

export interface Login {
    email: string;
    password: string
}

const passwordRules = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/

export const loginSchema = yup.object<Login>().shape({
    email: yup.string().email('Please enter a valid email').required('Required'),
    password: yup.string().required("Required")
});

