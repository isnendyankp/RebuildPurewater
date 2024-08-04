import React from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'

const Login = ({
  onLoginSuccess,
}: {
  onLoginSuccess: (token: string) => void;
}) => {
  // interface for form props
  interface FormProps {
    email: string;
    password: string;
  }

  // useFormik hook
  const formMik = useFormik<FormProps>({
    initialValues: {
      email: '',
      password: '',
    },

    // validation for username, email & password
    validationSchema: yup.object({
      // name: yup.string().required('name tidak boleh kosong'),
      email: yup
        .string()
        .email('Email tidak valid')
        .required('Email tidak boleh kosong'),
      password: yup
        .string()
        .min(8, 'Password minimal 8 karakter')
        .required('Password tidak boleh kosong'),
    }),

    // onSubmit function for login form
    onSubmit: async (values) => {
      try {
        const response = await fetch(
          'https://revou-final-project-be-group-d-production.up.railway.app/login',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(values),
          }
        );
        // if response is ok, you can use it here
        const data = await response.json();
        // set token to local storage
        localStorage.setItem('token', data.access_token);
        // get token from local storage
        const token = data.access_token;
        // call onLoginSuccess function
        onLoginSuccess(token);
        // navigate to home page
        // router.push('/');
      } catch (error) {
        // catch any network error or any error thrown in the fetch call
        console.log(
          'There has been a problem with your fetch operation: ' +
            (error as Error).message
        );
      }
    },
  });
  return <div>Login</div>;
};

export default Login