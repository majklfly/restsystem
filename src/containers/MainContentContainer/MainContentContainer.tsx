import React, { useState, useEffect } from "react";
import { Container, List } from "./styles";

import { Paper, Tab } from "@material-ui/core";
import Schedule from "@material-ui/icons/Schedule";
import LocalShipping from "@material-ui/icons/LocalShipping";
import School from "@material-ui/icons/School";
import ViewAgenda from "@material-ui/icons/ViewAgenda";
import People from "@material-ui/icons/People";

import { EmployeesContainer } from "../EmployeesContainer/EmployeesContainer";
import { UserPanel } from "../../components/UserPanel/UserPanel";

interface props {}

export const MainContentContainer: React.FC<props> = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  useEffect(() => {
    console.log("triggered");
  }, []);

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
            <Tab icon={<Schedule />} label="Rota" />
            <Tab icon={<LocalShipping />} label="Orders" />
            <Tab icon={<School />} label="Training" />
            <Tab icon={<ViewAgenda />} label="Stock" />
            <Tab icon={<People />} label="Employees" />
          </List>
        </Paper>
        {value === 4 && <EmployeesContainer />}
      </Container>
    </>
  );
};
