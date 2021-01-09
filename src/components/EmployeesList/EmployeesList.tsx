import React from "react";
import {
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
} from "@material-ui/core";

import AccountBox from "@material-ui/icons/AccountBox";
import Edit from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { MainList } from "./styles";

import { RootState } from "../../redux/reducers/rootReducer";
import { useSelector } from "react-redux";

interface user {
  firstName: string;
  lastName: string;
  email: string;
  date_joined: string;
  company: string;
  department: string;
}

interface props {}

export const EmployeesList: React.FC<props> = (props) => {
  const { employees, departments } = useSelector(
    (state: RootState) => state.employeeReducer
  );

  const nameDepartment = (department: number) => {
    let string;
    if (departments) {
      departments.forEach((item) => {
        if (item[0] === department) {
          string = item[1];
        }
      });
    }
    return string;
  };

  return (
    <MainList>
      {employees.map((employee: user) => {
        return (
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <AccountBox />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={employee.firstName + " " + employee.lastName}
              secondary={
                "Department: " + nameDepartment(parseInt(employee.department))
              }
            />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="edit">
                <Edit />
              </IconButton>
              <IconButton edge="end" aria-label="delete">
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        );
      })}
    </MainList>
  );
};
