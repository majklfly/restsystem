import React from "react";
import styled from "styled-components";
import * as palette from "../../variables";

interface props {}

const Container = styled.section`
  width: 100px;
  height: 100px;
  z-index: 2;
  position: absolute;
  display: flex;
  position: absolute;
  top: 0;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

const Box = styled.article`
  width: 70%;
  min-width: 150px;
  max-width: 1000px;
  height: 60%;
  background-color: ${palette.background_color};
  border-radius: 15px;
`;

export const LoginContainer: React.FC<props> = () => {
  return (
    <Container>
      <Box></Box>
    </Container>
  );
};
