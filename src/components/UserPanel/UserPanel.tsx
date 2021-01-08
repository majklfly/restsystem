import React from "react";

import { Container, Text } from "./styles";

export const UserPanel: React.FC = () => {
  return (
    <Container>
      <Text>Visitor</Text>
      <Text>Status: guest</Text>
    </Container>
  );
};
