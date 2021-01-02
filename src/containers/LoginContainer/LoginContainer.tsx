import React from "react";
import styled from "styled-components";
import * as palette from "../../variables";

import Lottie from "lottie-react";
import loadingAnimation from "../../assets/login_animation.json";

import { LoginForm } from "../../components/LoginForm/LoginForm";

interface props {}

const Container = styled.section`
  z-index: 2;
  position: absolute;
  display: flex;
  position: absolute;
  font-family: Cantarell, sans-serif;
  top: 0;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  flex-wrap: wrap;
`;

const Box = styled.article`
  width: 70%;
  min-width: 150px;
  max-width: 1000px;
  height: fit-content;
  min-height: 400px;
  background-color: ${palette.background_color};
  border-radius: 15px;
  box-shadow: 0px 0px 30px ${palette.background_shadow_color};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  padding: 3%;
  margin: 10%;
`;

const Button = styled.div`
  width: "100%";
  height: "100px";
  background-color: ${palette.button_color_one};
  box-shadow: 0px 0px 30px ${palette.background_shadow_color};
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 10%;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 0px 40px ${palette.background_shadow_color};
  }
`;

const RightSide = styled.article`
  width: 35%;
  min-width: 150px;
  height: 80%;
  margin: 10%;
  display: flex;
  flex-direction: column;
`;

const LeftSide = styled.div`
  width: 45%;
  min-width: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const LoginContainer: React.FC<props> = () => {
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
          <LoginForm />
          <hr />
          <h4>Forgot your password?</h4>
        </RightSide>
      </Box>
    </Container>
  );
};
