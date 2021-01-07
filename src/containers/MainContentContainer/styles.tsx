import styled from "styled-components";
import * as palette from "../../variables";

import { Tabs } from "@material-ui/core";

export const Container = styled.section`
  z-index: 2;
  position: absolute;
  display: flex;
  position: absolute;
  font-family: ${palette.font_primary};
  top: 0;
  justify-content: flex-end;
  align-items: flex-end;
  flex-direction: column;
  width: 90vw;
  margin-left: 50%;
  transform: translate(-50%);
  margin-top: 10%;
  max-width: 1500px;
  height: auto;
  flex-wrap: wrap;
`;

export const List = styled(Tabs)`
  && {
    background-color: ${palette.background_color};
    border-bottom: 1px solid black;
  }
`;
