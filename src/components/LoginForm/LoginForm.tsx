import React, { useEffect, useState } from "react";
import { InputAdornment, IconButton } from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import Cookies from "js-cookie";

import { useDispatch } from "react-redux";
import { addUser } from "../../redux/slices/globalSlice";

import { Container, Form, Field, Btn } from "./styles";
import { Formik } from "formik";

interface props {}

export const LoginForm: React.FC<props> = () => {
  const [showPassword, setShowPassword] = useState<boolean>(true);
  const [csrfToken, setCsrfToken] = useState<string>("");

  const dispatch = useDispatch();

  useEffect(() => {
    fetch("/user/auth/", {
      headers: {
        accepts: "application/json",
      },
    }).then((res) => {
      const cookie = Cookies.get("csrftoken");
      console.log("runned", cookie);
      if (cookie) {
        setCsrfToken(cookie);
      }
    });
  }, []);

  return (
    <Container>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(data, { setSubmitting, resetForm }) => {
          setSubmitting(true);
          console.log("token", csrfToken);
          fetch("/user/login/", {
            method: "POST",
            headers: {
              "X-CSRFToken": csrfToken,
            },
            body: JSON.stringify({
              email: data.email,
              password: data.password,
            }),
          }).then((res) => {
            res.json().then((data) => {
              if (data.user) {
                console.log("logged in as ", data.user);
                dispatch(addUser({ user_id: data.user }));
              }
            });
          });
          console.log(data);
          setSubmitting(false);
          resetForm();
        }}
      >
        {({ values, isSubmitting, handleSubmit, handleChange, handleBlur }) => (
          <Form onSubmit={handleSubmit}>
            <Field
              placeholder="Email"
              name="email"
              type="email"
              autoFocus
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <Field
              placeholder="Password"
              name="password"
              type={showPassword ? "password" : "text"}
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setShowPassword((prev) => !prev)}
                    onMouseDown={() => setShowPassword((prev) => !prev)}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
            <div>
              <Btn disabled={isSubmitting} type="submit">
                Log In
              </Btn>
            </div>
          </Form>
        )}
      </Formik>
    </Container>
  );
};
