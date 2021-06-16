import * as Yup from 'yup';
const LoginValidations = () => {
    return Yup.object().shape({
      email: Yup.string()
        .email('Invalid email, please provide a valid email.')
        .required('Email is required'),
      password: Yup.string()
        .min(5, 'Password must be at least 5 characters')
        .required('Password is required'),
    });
}
 
export default LoginValidations;

export const ForgotPassword = () => {
    return Yup.object().shape({
        email: Yup.string()
          .email('Invalid email, please provide a valid email.')
          .required('Email is required')
      });
};