import React from 'react';
import { Link } from 'react-router-dom';
import {withFormik,Form, useFormik, Field} from 'formik';
import CustomInputComponent from "../../../helpers/formik/CustomInput";
import {ForgotPassword} from "../validation";

const ForgotPasswordPage = () => {
    const formik = useFormik({
        initialValues: {
          firstName: '',
          lastName: '',
          email: '',
        },
        validate: ForgotPassword,
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        },
        onReset: () =>{
            return null
        }
      });
    return ( 
        <>
            <h4 className="text-3xl text-primary font-bold mb-4"> Forgot Password? </h4>
            <p className=" w-80 text-dark text-sm"> Enter the email address tied to this account to reset your account password</p>
            <div className="w-370">
                <Form onSubmit={formik.handleSubmit}>
                    <Field
                        name="email"
                        title="Email"
                        type="text"
                        component={CustomInputComponent}
                    />

                </Form>
                <div className="flex justify-between w-full mt-9">
                    <div className="text-black text-base py-3"><Link to="/login">I Remember now</Link> </div>
                    <div><button className=" bg-primary text-white py-3 px-12"> Reset </button></div>
                </div>
            </div>
        </>
     );
}

const FormikConnect = withFormik({
    mapPropsToValues({email, password}) {
      return {
        email: email,
        password: password,
      };
    },
    validationSchema: ForgotPassword(),
    handleSubmit: async (values, {props}) => {
      props.signin(values, props);
    },
  });
 
  export default FormikConnect(ForgotPasswordPage);