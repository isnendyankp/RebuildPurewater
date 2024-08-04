import React from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'

const Login = ({
  onLoginSuccess,
}: {
  onLoginSuccess: (token: string) => void;
}) => {
  // interface FormProps
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
  });
  return <div>Login</div>;
};

export default Login