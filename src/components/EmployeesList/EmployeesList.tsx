import React, { ReactText, useEffect, useState } from "react";
import {
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
} from "@material-ui/core";

import FolderIcon from "@material-ui/icons/Folder";
import DeleteIcon from "@material-ui/icons/Delete";
import { MainList } from "./styles";

interface user {
  firstName: string;
  lastName: string;
  email: string;
  date_joined: string;
  company: string;
  department: string;
}
interface department {
  name: string;
  users: user[];
  id: number;
}

interface props {
  data:
    | {
        id: number;
        departments: department[];
        created: string;
        name: string;
      }
    | undefined;
}

export const EmployeesList: React.FC<props> = (props) => {
  const [employees, setEmployees] = useState<user[]>([]);
  const [departments, setDepartments] = useState<ReactText[][]>([]);

  useEffect(() => {
    if (props.data) {
      const employees: user[] = [];
      props.data.departments.forEach((department) => {
        setDepartments((prev) => [...prev, [department.id, department.name]]);
        console.log(department);
        department.users.forEach((employee) => {
          employees.push(employee);
        });
      });
      setEmployees(employees);
    }
  }, []);

  const recognizeDepartment = (departmentId: number) => {
    let string;
    departments.forEach((item) => {
      if (item[0] === departmentId) {
        string = item[1];
      }
    });
    return string;
  };

  return (
    <MainList>
      {employees.map((employee: user) => {
        return (
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <FolderIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={employee.firstName + " " + employee.lastName}
              secondary={
                "Department: " +
                recognizeDepartment(parseInt(employee.department))
              }
            />
            <ListItemSecondaryAction>
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
