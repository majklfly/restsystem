import React from "react";

import { RootState } from "../../redux/reducers/rootReducer";
import { useSelector } from "react-redux";

import { Container, Text, Box, GreenDot, RedDot, StatusBox } from "./styles";

export const UserPanel: React.FC = () => {
  const { firstName, lastName, is_active } = useSelector(
    (state: RootState) => state.globalReducer
  );

  return (
    <Box>
      <Container>
        <Text>
          {firstName} {lastName}
        </Text>
        <StatusBox>
          <Text>Status:</Text>
          {is_active ? <GreenDot /> : <RedDot />}
        </StatusBox>
      </Container>
    </Box>
  );
};
