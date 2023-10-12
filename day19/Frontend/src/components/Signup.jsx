import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import backgroundImage from '../assets/images/bg.jpg';
import logo from '../assets/images/logo.png';

import { register } from '../slices/auth';
import { clearMessage } from '../slices/message';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [successful, setSuccessful] = useState(false);

  const navigate = useNavigate();

  const { message } = useSelector((state) => state.message);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);

  const initialValues = {
    username: '',
    email: '',
    password: '',
    role: [], // Initialize role as an empty array
  };

  const containerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    minHeight: '100vh',
    minWidth: '100vw',
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().required('Name is required!'),
    email: Yup.string()
      .email('Email is not valid')
      .required('Email is required!'),
    password: Yup.string()
      .min(6, 'Password should be at least 6 characters')
      .required('Password is required!'),
    role: Yup.array().required('Please select at least one role'), // Add role validation as an array
  });

  const handleSignUp = async (formValues) => {
    const { username, email, password, role } = formValues;
    setSuccessful(false);

    try {
      await dispatch(register({ username, email, password, role }));
      setSuccessful(true);
      // navigate('/');
      if(setSuccessful){
        navigate('/signin');
      } 
    } catch (error) {
      setSuccessful(false);
      console.error('Registration failed:', error);
    }
  };

  return (
    <div className="container" style={containerStyle}>
      <div className="row justify-content-center p-5">
        <div className="col-md-3 col-sm-4 mt-5">
          <div className="card card-authentication1" style={{ backgroundColor: 'rgba(0, 0, 0, 0.28)' }}>
            <div className="card-body">
              <div className="card-content p-2">
                <div className="text-center">
                  <img src={logo} alt="logo icon" />
                </div>
                <div className="card-title text-center py-3 text-white fs-4">Sign Up</div>
                <Formik
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  onSubmit={handleSignUp}
                >
                  {({ errors, touched }) => (
                    <Form>
                      {!successful && (
                        <div>
                          <div className="form-group">
                            <div className="position-relative has-icon-right">
                              <Field
                                name="username"
                                type="text"
                                className={`form-control input-shadow ${
                                  errors.name && touched.name ? 'is-invalid' : ''
                                }`}
                                placeholder="Enter Your Name"
                              />
                              <ErrorMessage
                                name="username"
                                component="div"
                                className="invalid-feedback"
                              />
                            </div>
                          </div>

                          <div className="form-group mt-3">
                            <div className="position-relative has-icon-right">
                              <Field
                                name="email"
                                type="email"
                                className={`form-control input-shadow ${
                                  errors.email && touched.email ? 'is-invalid' : ''
                                }`}
                                placeholder="Enter Your Mail ID"
                              />
                              <ErrorMessage
                                name="email"
                                component="div"
                                className="invalid-feedback"
                              />
                            </div>
                          </div>

                          <div className="form-group mt-3">
                            <div className="position-relative has-icon-right">
                              <Field
                                name="password"
                                type="password"
                                className={`form-control input-shadow ${
                                  errors.password && touched.password
                                    ? 'is-invalid'
                                    : ''
                                }`}
                                placeholder="Choose Password"
                              />
                              <ErrorMessage
                                name="password"
                                component="div"
                                className="invalid-feedback"
                              />
                            </div>
                          </div>

                          <div className="form-group mt-3">
                            <div className="position-relative has-icon-right">
                              <div className='text-white'>Select role:</div>
                              <div>
                                <label className='text-white'>
                                  <Field
                                    type="checkbox"
                                    name="role"
                                    value="user"
                                    className='text-white'
                                  />
                                  User
                                </label>
                              </div>
                            
                              <div>
                                <label className='text-white'>
                                  <Field
                                    type="checkbox"
                                    name="role"
                                    value="admin"
                                    
                                  />
                                  Admin
                                </label>
                              </div>
                              <ErrorMessage
                                name="role"
                                component="div"
                                className="invalid-feedback"
                              />
                            </div>
                          </div>

                          <button
                            type="submit"
                            className="btn btn-dark btn-block my-4"
                            style={{ marginLeft: '120px' }}
                          >
                            Register
                          </button>
                        </div>
                      )}
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
      {message && (
        <div className="form-group">
          <div
            className={`alert ${
              successful ? 'alert-success' : 'alert-danger'
            }`}
            role="alert"
          >
            {message}
          </div>
        </div>
      )}
    </div>
  );
};

export default SignUp;
