import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Input, Button, Link } from "@nextui-org/react";

const LoginSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  password: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

const Login = (props) => (
  <div>
    <h1 className="text-center font-extrabold text-5xl py-5 block my-5">
      Login
    </h1>
    <Formik
      initialValues={{
        username: "",
        password: "",
        email: "",
      }}
      validationSchema={LoginSchema}
      onSubmit={(values) => {
        // same shape as initial values
        console.log(values);
      }}
    >
      {({ errors, touched, handleChange, handleSubmit, values }) => (
        <Form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <Input
              type="text"
              label="Username"
              variant="bordered"
              defaultValue=""
              name="username"
              value={values.username}
              onChange={handleChange}
              autoComplete="on"
            />
            {errors.username && touched.username ? (
              <div className="error-message text-red-500 bg-inherit w-full text-center p-2">
                {errors.username}
              </div>
            ) : null}
          </div>
          <div>
            {" "}
            <Input
              type="email"
              label="Email"
              variant="bordered"
              defaultValue=""
              name="email"
              value={values.email}
              onChange={handleChange}
            />{" "}
            {errors.email && touched.email ? (
              <div className="error-message text-red-500 bg-inherit w-full text-center p-2">
                {errors.email}
              </div>
            ) : null}
          </div>
          <div>
            {" "}
            <Input
              type="password"
              label="Password"
              variant="bordered"
              defaultValue=""
              autoComplete="current-password"
              name="password"
              value={values.password}
              onChange={handleChange}
            />{" "}
            {errors.password && touched.password ? (
              <div className="error-message text-red-500 bg-inherit w-full text-center p-2">
                {errors.password}
              </div>
            ) : null}
          </div>
          <p className="text-center text-small">
            Need to create an account?{" "}
            <Link
              size="lg"
              className="cursor-pointer ml-3"
              onClick={() => props.setSelected("sign-up")}
            >
              Sign up
            </Link>
          </p>
          <div className="flex gap-2 justify-end">
            <Button
              fullWidth
              className="bg-gray-700 hover:bg-cyan-950 py-7 text-2xl"
              type="submit"
            >
              Login
            </Button>
          </div>{" "}
        </Form>
      )}
    </Formik>
  </div>
);
export default Login;
