import React, { useState } from "react";
import { Container, List } from "./styles";

import { Paper, Tab } from "@material-ui/core";
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
        <Paper square elevation={3}>
          <List
            value={value}
            onChange={handleChange}
            variant="fullWidth"
            indicatorColor="primary"
            textColor="primary"
            aria-label="icon label tabs example"
          >
            {access_rota && <Tab icon={<Schedule />} label="Rota" />}
            {access_orders && <Tab icon={<LocalShipping />} label="Orders" />}
            {access_training && <Tab icon={<School />} label="Training" />}
            {access_stock && <Tab icon={<ViewAgenda />} label="Stock" />}
            {access_employees && <Tab icon={<People />} label="Employees" />}
          </List>
        </Paper>
        {value === 4 && <EmployeesContainer />}
      </Container>
    </>
  );
};
