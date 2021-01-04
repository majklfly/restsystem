import React, { useState } from "react";

import Lottie from "lottie-react";
import loadingAnimation from "../../assets/login_animation.json";

import { Container, Box, LeftSide, Button, RightSide } from "./styles";

import { LoginForm } from "../../components/LoginForm/LoginForm";
import { ForgotPasswordForm } from "../../components/ForgotPasswordForm/ForgotPasswordForm";

interface props {}

export const LoginContainer: React.FC<props> = () => {
  const [showPasswordForm, setShowPasswordForm] = useState<boolean>(false);

  return (
    <Container>
      <Box>
        <LeftSide>
          <Lottie animationData={loadingAnimation} loop={false} />
          <Button>
            <h3>Show me around (demo version)</h3>
          </Button>
        </LeftSide>
        <RightSide>
          {showPasswordForm ? (
            <ForgotPasswordForm />
          ) : (
            <LoginForm setShowPasswordForm={setShowPasswordForm} />
          )}
        </RightSide>
      </Box>
    </Container>
  );
};
