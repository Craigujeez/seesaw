import React from 'react';
import { Link } from 'react-router-dom';
import {withFormik,Form, useFormik, Field} from 'formik';
import CustomInputComponent from "../../../helpers/formik/CustomInput";
import validate from "../validation";

const LoginPage = () => {
    const formik = useFormik({
        initialValues: {
          firstName: '',
          lastName: '',
          email: '',
        },
        validate,
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        },
        onReset: () =>{
            return null
        }
      });
    return ( 
        <>
            <h4 className="text-3xl text-primary font-bold mb-14"> Log In </h4>
            <div className="w-370">
                <Form onSubmit={formik.handleSubmit}>
                    <Field
                        name="email"
                        title="Email"
                        type="text"
                        component={CustomInputComponent}
                        required
                    />
                    <Field
                        name="password"
                        title="Password"
                        type="password"
                        component={CustomInputComponent}
                        required
                    />

                </Form>
                <div className="flex justify-between w-full">
                    <div className="text-black text-base py-3"> <Link to="/forgot-password"> Forgot Password? </Link></div>
                    <div><button className=" bg-primary text-white py-3 px-12">LOG IN</button></div>
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
    validationSchema: validate(),
    handleSubmit: async (values, {props}) => {
      props.signin(values, props);
    },
  });
 
  export default FormikConnect(LoginPage);