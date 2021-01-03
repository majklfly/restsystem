import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Input, Button, InputAdornment, IconButton } from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import Cookies from "js-cookie";

import { Formik } from "formik";

import * as palette from "../../variables";

const Container = styled.article`
  width: 100%;
  height: 200px;
  background-color: ${palette.background_color_secondary};
  box-shadow: 0px 0px 30px ${palette.background_shadow_color_secondary};
  font-family: ${palette.font_primary};
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10%;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Field = styled(Input)`
  && {
    margin-bottom: 10%;
    width: 100%;
  }
`;

const Btn = styled(Button)`
  && {
    background-color: transparent;
  }
`;

interface props {}

export const LoginForm: React.FC<props> = () => {
  const [showPassword, setShowPassword] = useState<boolean>(true);
  const [csrfToken, setCsrfToken] = useState<string>("");

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
            console.log("res", res);
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
