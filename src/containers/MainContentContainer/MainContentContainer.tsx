import React, { useState } from "react";
import { Container, List, Button, NavList } from "./styles";

import Schedule from "@material-ui/icons/Schedule";
import LocalShipping from "@material-ui/icons/LocalShipping";
import School from "@material-ui/icons/School";
import ViewAgenda from "@material-ui/icons/ViewAgenda";
import People from "@material-ui/icons/People";

import { EmployeesContainer } from "../EmployeesContainer/EmployeesContainer";
import { UserPanel } from "../../components/UserPanel/UserPanel";

import { RootState } from "../../redux/reducers/rootReducer";
import { useSelector } from "react-redux";

interface props {}

export const MainContentContainer: React.FC<props> = () => {
  const [value, setValue] = useState(0);

  const {
    access_employees,
    access_stock,
    access_training,
    access_orders,
    access_rota,
  } = useSelector((state: RootState) => state.globalReducer);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <UserPanel />
      <Container data-testid="mainContentContainer">
        <NavList square elevation={3}>
          <List
            value={value}
            onChange={handleChange}
            variant="scrollable"
            indicatorColor="primary"
            textColor="primary"
            aria-label="icon label tabs example"
          >
            {access_rota && <Button icon={<Schedule />} label="Rota" />}
            {access_orders && (
              <Button icon={<LocalShipping />} label="Orders" />
            )}
            {access_training && <Button icon={<School />} label="Training" />}
            {access_stock && <Button icon={<ViewAgenda />} label="Stock" />}
            {access_employees && <Button icon={<People />} label="Employees" />}
          </List>
        </NavList>
        {value === 4 && <EmployeesContainer />}
      </Container>
    </>
  );
};
