import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { Formik } from "formik";

import { Container, Field, Btn, Form } from "./styles";

interface props {}

export const ForgotPasswordForm: React.FC<props> = () => {
  const [csrfToken, setCsrtToken] = useState<string>("");

  useEffect(() => {
    const cookie = Cookies.get("csrftoken");
    if (cookie) {
      setCsrtToken(cookie);
    }
  }, []);

  return (
    <Container>
      <Formik
        initialValues={{ email: "" }}
        onSubmit={(data) => {
          console.log("sending", data.email);
          fetch("/user/request-reset-email/", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "X-CSRFToken": csrfToken,
            },
            body: JSON.stringify({
              email: data.email,
            }),
          }).then((res) => {
            res.json().then((data) => {
              console.log(data);
            });
          });
        }}
      >
        {({ values, isSubmitting, handleSubmit, handleChange, handleBlur }) => (
          <Form onSubmit={handleSubmit}>
            <Field
              placeholder="Insert your email"
              name="email"
              type="email"
              autoFocus
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <Btn type="submit">Request new Password</Btn>
          </Form>
        )}
      </Formik>
    </Container>
  );
};
