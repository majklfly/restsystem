import styled from "styled-components";
import * as palette from "../../variables";

export const Container = styled.section`
  z-index: 3;
  display: flex;
  font-family: ${palette.font_primary};
  background-color: ${palette.background_color};
  flex-direction: column;
  width: 100%;
  height: 70vh;
  max-width: 1500px;
  flex-wrap: wrap;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;
