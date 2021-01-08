import * as palette from "../../variables";
import styled from "styled-components";

export const Container = styled.article`
  width: 50%;
  min-width: 200px;
  height: fit-content;
  max-height: 40px;
  max-width: 500px;
  background-color: ${palette.background_color_opacity};
  border: 1px solid ${palette.background_color};
  z-index: 2;
  border-radius: 10px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const Text = styled.h4`
  opacity: 1;
  font-family: ${palette.font_primary};
  text-align: center;
  font-size: clamp(12px, 1.6vw, 20px);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Box = styled.section`
  width: 100%;
  height: auto;
  position: absolute;
  top: 4%;
  left: 4%;
`;

export const StatusBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const GreenDot = styled.div`
  width: 3vw;
  max-width: 20px;
  height: 3vw;
  max-height: 20px;
  border-radius: 100%;
  margin-left: 10px;
  background-color: green;
`;

export const RedDot = styled.div`
  width: 3vw;
  max-width: 20px;
  height: 3vw;
  max-height: 20px;
  border-radius: 100%;
  margin-left: 10px;
  background-color: green;
`;
