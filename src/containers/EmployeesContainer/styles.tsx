import styled from "styled-components";
import * as palette from "../../variables";

export const Container = styled.section`
  z-index: 3;
  display: flex;
  font-family: ${palette.font_primary};
  background-color: ${palette.background_color};
  justify-content: flex-end;
  align-items: flex-end;
  flex-direction: column;
  width: 90vw;
  height: 70vh;
  max-width: 1500px;
  flex-wrap: wrap;
`;
