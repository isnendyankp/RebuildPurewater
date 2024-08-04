import React from 'react'
import { useFormik } from 'formik'

const Login = () => {
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
    });
  return (
    <div>Login</div>
  )
}

export default Login