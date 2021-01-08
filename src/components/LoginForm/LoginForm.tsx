import React, { useEffect, useState } from "react";
import { InputAdornment, IconButton } from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import Cookies from "js-cookie";

import { useDispatch } from "react-redux";
import { addUser } from "../../redux/slices/globalSlice";

import {
  Container,
  Form,
  Field,
  Btn,
  ButtonContainer,
  ErrorMessage,
} from "./styles";
import { Formik } from "formik";

interface props {
  setShowPasswordForm: (active: boolean) => void;
}

interface FetchData {
  email: string;
  password: string;
}

export const LoginForm: React.FC<props> = (props) => {
  const [showPassword, setShowPassword] = useState<boolean>(true);
  const [csrfToken, setCsrfToken] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const dispatch = useDispatch();

  const fetchUser = (data: FetchData) => {
    fetch("/user/login/", {
      method: "POST",
      headers: {
        "X-CSRFToken": csrfToken,
      },
      body: JSON.stringify({
        email: data.email,
        password: data.password,
      }),
    }).then(
      (res) => {
        if (res.status === 401) {
          setErrorMessage("Not matching credentials");
        } else if (res.status !== 200) {
          setErrorMessage("Something went wrong");
        }
        res.json().then(
          (data) => {
            if (data.user) {
              dispatch(
                addUser({
                  user_id: data.user,
                  company: data.company,
                  access_employees: data.access_employees,
                  access_stock: data.access_stock,
                  access_training: data.access_training,
                  access_orders: data.access_orders,
                  access_rota: data.access_rota,
                })
              );
            }
          },
          (e) => console.log(e)
        );
      },
      (e) => console.log(e)
    );
  };

  useEffect(() => {
    fetch("/user/auth/", {
      headers: {
        accepts: "application/json",
      },
    })
      .then((res) => {
        const cookie = Cookies.get("csrftoken");
        if (cookie) {
          setCsrfToken(cookie);
        }
      })
      .catch((e) => setErrorMessage(e));
  }, []);

  return (
    <Container>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(data, { setSubmitting, resetForm }) => {
          setSubmitting(true);
          fetchUser(data);
          setSubmitting(false);
          resetForm();
        }}
      >
        {({ values, isSubmitting, handleSubmit, handleChange, handleBlur }) => (
          <Form onSubmit={handleSubmit} data-testid="loginForm">
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
            <ButtonContainer>
              <Btn disabled={isSubmitting} type="submit">
                Log In
              </Btn>
              <Btn onClick={() => props.setShowPasswordForm(true)}>
                Forgot your password?
              </Btn>
            </ButtonContainer>
          </Form>
        )}
      </Formik>
      {errorMessage && (
        <ErrorMessage data-testid="errorMessageLogin">
          {errorMessage}
        </ErrorMessage>
      )}
    </Container>
  );
};
