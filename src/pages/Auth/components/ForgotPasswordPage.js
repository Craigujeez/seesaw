import React from 'react';
import {useDispatch} from "react-redux";
import { Link,useHistory } from 'react-router-dom';
import {useFormik} from 'formik';
import {forgotPassword} from "../../../redux/actions/authActions"
import CustomInputComponent from "../../../helpers/formik/CustomInput";
import {ForgotPassword} from "../validation";

const ForgotPasswordPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
    
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: ForgotPassword,
    onSubmit: async values => {
      await forgotPassword({email: values.email},history)(dispatch);
    }
  });

  const {
    values,
    handleChange,
    handleSubmit,
    errors,
    touched,
    isSubmitting
  } = formik;
    return ( 
        <>
            <h4 className="text-3xl text-primary font-bold mb-4"> Forgot Password? </h4>
            <p className=" w-80 text-dark text-sm"> Enter the email address tied to this account to reset your account password</p>
            <div className="w-370">
                <form onSubmit={handleSubmit}>
                    <CustomInputComponent
                        name="email"
                        title="Email"
                        type="text"
                        onChange={handleChange("email")}
                        error={errors.email}
                        touched={touched.email}
                        value={values.email}
                        required
                    />
                    
                  <div className="flex justify-between w-full mt-9">
                      <div className="text-black text-base py-3"><Link to="/login">I Remember now</Link> </div>
                      <div>
                        <button 
                          type="submit"
                          className=" bg-primary text-white py-3 w-36 text-center"
                          disabled={isSubmitting}
                        >{isSubmitting ? 'Loading...': "Reset"}</button>
                      </div>
                </div>

                </form>
            </div>
        </>
     );
}
 
  export default ForgotPasswordPage;