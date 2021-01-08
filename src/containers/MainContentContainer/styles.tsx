import styled from "styled-components";
import * as palette from "../../variables";

import { Tabs, Tab, Paper } from "@material-ui/core";

export const Container = styled.section`
  z-index: 2;
  display: flex;
  position: absolute;
  top: 17vh;
  font-family: ${palette.font_primary};
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  width: 90vw;
  margin-left: 50%;
  transform: translate(-50%);
  max-width: 1500px;
  height: auto;
  flex-wrap: wrap;
`;

export const List = styled(Tabs)`
  && {
    background-color: ${palette.background_color};
    border-bottom: 1px solid black;
    display: flex;
  }
`;

export const Button = styled(Tab)`
  && {
    font-size: clamp(12px, 1.4vw, 20px);
  }
`;

export const NavList = styled(Paper)`
  && {
    width: auto;
    max-width: 1500px;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    align-self: flex-end;
  }
`;
