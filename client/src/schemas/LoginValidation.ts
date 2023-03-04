import * as yup from 'yup'

export interface Login {
    email: string;
    password: string
}

const passwordRules = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/

export const loginSchema = yup.object<Login>().shape({
    email: yup.string().email('Please enter a valid email').required('Required'),
    password: yup.string()
                 .min(5, 'Password too short')
                 .required("Required")
                //  TODO - remove the validation. this kind of validation is not 
                // needed on the login, only on signup
                 .test('isValidPass', 'Your password need to have lowercase, uppercase and a number', (value, context)=>{
                    const hasUpperCase = /[A-Z]/.test(value);
                    const hasLowerCase = /[a-z]/.test(value);
                    const hasNumber = /[0-9]/.test(value)
                    let metConditions = 0;
                    const conditions = [hasUpperCase, hasLowerCase, hasNumber]

                    conditions.forEach((condition)=>condition ? metConditions++ : null)

                    return metConditions === 3
                 })
});

