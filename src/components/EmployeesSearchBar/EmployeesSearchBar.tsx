import React from "react";
import { Container, SearchBar } from "./styles";

export const EmployeesSearchBar: React.FC = () => {
  return (
    <Container>
      <SearchBar id="outlined-basic" label="Outlined" variant="outlined" />
    </Container>
  );
};
