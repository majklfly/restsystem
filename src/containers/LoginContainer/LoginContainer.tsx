import React, { useState } from "react";
import Cookies from "js-cookie";

import Lottie from "lottie-react";
import loadingAnimation from "../../assets/login_animation.json";

import { useDispatch } from "react-redux";
import { addUser } from "../../redux/slices/globalSlice";

import {
  Container,
  Box,
  LeftSide,
  Button,
  RightSide,
  CookiesWarning,
} from "./styles";

import { LoginForm } from "../../components/LoginForm/LoginForm";
import { ForgotPasswordForm } from "../../components/ForgotPasswordForm/ForgotPasswordForm";

interface props {}

export const LoginContainer: React.FC<props> = () => {
  const [showPasswordForm, setShowPasswordForm] = useState<boolean>(false);

  const dispatch = useDispatch();

  const loginAsVisitor = () => {
    const token = Cookies.get("csrftoken");
    fetch("/user/login/", {
      method: "POST",
      headers: {
        "X-CSRFToken": JSON.stringify(token),
      },
      body: JSON.stringify({
        email: "visitor@r-restsystem.com",
        password: "ZUDmUJevSas2ek4",
      }),
    }).then((res) => {
      res.json().then((data) => {
        if (data.user) {
          dispatch(addUser({ user_id: data.user }));
        }
      });
    });
  };

  return (
    <Container>
      <Box>
        <LeftSide>
          <Lottie animationData={loadingAnimation} loop={false} />
          <CookiesWarning>
            On this website we use cookies to enable you as a visitor to adapt
            the appearance of the website. The majority are the so called
            “session cookies”. They will be automatically deleted after the
            visit on the website. Cookies do not cause any harm to your computer
            and do not contain viruses.
          </CookiesWarning>
        </LeftSide>
        <RightSide>
          {showPasswordForm ? (
            <ForgotPasswordForm />
          ) : (
            <LoginForm setShowPasswordForm={setShowPasswordForm} />
          )}
          <h2>OR</h2>
          <Button onClick={loginAsVisitor}>
            <h3>Show me around (demo version)</h3>
          </Button>
        </RightSide>
      </Box>
    </Container>
  );
};
