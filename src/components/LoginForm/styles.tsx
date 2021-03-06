import * as palette from "../../variables";
import styled from "styled-components";

import { Input, Button } from "@material-ui/core";

export const Container = styled.article`
  width: 100%;
  height: 200px;
  background-color: ${palette.background_color_secondary};
  box-shadow: 0px 0px 30px ${palette.background_shadow_color_secondary};
  font-family: ${palette.font_primary};
  border-radius: 10px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 10%;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Field = styled(Input)`
  && {
    margin-bottom: 10%;
    width: 100%;
    font-family: ${palette.font_primary};
  }
`;

export const Btn = styled(Button)`
  && {
    background-color: transparent;
    font-family: ${palette.font_primary};
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const ErrorMessage = styled.h4`
  color: red;
  font-family: ${palette.font_primary};
  text-align: center;
`;
