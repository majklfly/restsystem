import * as palette from "../../variables";
import styled from "styled-components";

export const Container = styled.article`
  width: 200px;
  height: 10px;
  background-color: ${palette.background_color_opacity};
  border: 1px solid ${palette.background_color};
  z-index: 2;
  position: absolute;
  top: 2%;
  left: 5%;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1%;
`;

export const Text = styled.h4`
  opacity: 1;
  font-family: ${palette.font_primary};
`;
