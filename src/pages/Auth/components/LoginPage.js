import React from 'react';
import {useDispatch} from 'react-redux';
import { Link,useHistory } from 'react-router-dom';
import {useFormik} from 'formik';
import {loginAdmin} from "../../../redux/actions/authActions"
import CustomInputComponent from "../../../helpers/formik/CustomInput";
import validate from "../validation";

const LoginPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
    
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: validate,
    onSubmit: async values => {
      await loginAdmin({email: values.email, password: values.password},history)(dispatch);
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
            <h4 className="text-3xl text-primary font-bold mb-14"> Log In </h4>
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
                    <CustomInputComponent
                        name="password"
                        title="Password"
                        type="password"
                        onChange={handleChange("password")}
                        error={errors.password}
                        touched={touched.password}
                        value={values.password}
                        required
                    />
                    <div className="flex justify-between w-full">
                        <div className="text-black text-base py-3"> 
                          <Link to="/forgot-password"> Forgot Password? </Link> <br/>
                        </div>
                        <div>
                          <button 
                            type="submit"
                            className=" bg-primary text-white py-3 w-36 text-center"
                            disabled={isSubmitting}
                          >{isSubmitting ? 'Loading...': "LOG IN"}</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
     );
}

 
  export default LoginPage;