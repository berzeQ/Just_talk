import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Input, Button, Link } from "@nextui-org/react";
import axios from "axios";
import { toast } from "react-hot-toast";

const SignupSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Username is required"),
  password: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Password must be more than 6 character"),
  email: Yup.string().email("Invalid email").required("Email is required"),
});

const Register = (props) => {
  const userRegister = async (values) => {
    try {
      const res = await axios.post("http://localhost:5000/register", values);
      if (res) {
        return (
          console.log(res),
          props.setSelected("login"),
          toast(
            res.status == 200 ? res.data.msg + ". Please login" : data.msg,
            {
              icon: res.status == 200 ? "✅" : "❌",
              style: {
                borderRadius: "10px",
                background: "#333",
                color: "#fff",
                padding: "10px",
              },
            }
          )
        );
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <h1 className="text-center font-extrabold text-5xl py-5 block my-5">
        Register
      </h1>{" "}
      <Formik
        initialValues={{
          username: "",
          password: "",
          email: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          // same shape as initial values
          console.log(values);
          userRegister(values);
        }}
      >
        {({
          errors,
          touched,
          handleChange,
          handleSubmit,
          values,
          handleBlur,
        }) => {
          return (
            <Form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4 w-full"
            >
              <div className="flex flex-col justify-center items-center gap-3">
                {" "}
                <Input
                  type="text"
                  label="Username"
                  variant="bordered"
                  defaultValue=""
                  name="username"
                  value={values.username}
                  onChange={handleChange}
                  autoComplete="on"
                  onBlur={handleBlur}
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
                  onBlur={handleBlur}
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
                  onBlur={handleBlur}
                />{" "}
                {errors.password && touched.password ? (
                  <div className="error-message text-red-500 bg-inherit w-full text-center p-2">
                    {errors.password}
                  </div>
                ) : null}
              </div>
              <p className="text-center text-small">
                Already have an account?{" "}
                <Link
                  size="lg"
                  className="cursor-pointer ml-3"
                  onClick={() => props.setSelected("login")}
                >
                  Login
                </Link>
              </p>
              <div className="flex gap-2 justify-end">
                <Button
                  fullWidth
                  color="primary"
                  type="submit"
                  className="bg-gray-700 hover:bg-cyan-950 py-7 text-2xl"
                >
                  Register
                </Button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};
export default Register;
