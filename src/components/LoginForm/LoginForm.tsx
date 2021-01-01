import React from "react";
import styled from "styled-components";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

import { Formik, Form, Field } from "formik";

import * as palette from "../../variables";
import { PasswordInput } from "../../components/PasswordInput/PasswordInput";

const Container = styled.article`
  width: 100%;
  height: 200px;
  background-color: ${palette.background_color_secondary};
  box-shadow: 0px 0px 30px ${palette.background_shadow_color_secondary};
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10%;
`;

interface props {}

interface MyFormValues {
  firstName: string;
}

export const LoginForm: React.FC<props> = () => {
  const initialValues: MyFormValues = { firstName: "" };
  return (
    <Container>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          console.log({ values, actions });
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }}
      >
        <Form>
          <Field
            id="email"
            name="email"
            placeholder="Email"
            className="form-control"
          />
          <Field component={PasswordInput} />
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </Form>
      </Formik>
    </Container>
  );
};
