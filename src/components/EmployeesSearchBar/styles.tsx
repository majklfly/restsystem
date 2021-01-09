import styled from "styled-components";
import * as palette from "../../variables";

import TextField from "@material-ui/core/TextField";

export const Container = styled.div`
  height: 50px;
  width: 100%;
  background-color: ${palette.background_color};
  display: flex;
  justify-content: space-evenly;
`;

export const SearchBar = styled(TextField)`
  width: 80%;
`;
