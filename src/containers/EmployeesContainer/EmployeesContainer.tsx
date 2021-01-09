import React, { useEffect } from "react";
import { Container } from "./styles";
import Cookies from "js-cookie";

import { RootState } from "../../redux/reducers/rootReducer";
import { useSelector } from "react-redux";

import { EmployeesList } from "../../components/EmployeesList/EmployeesList";
import { EmployeesSearchBar } from "../../components/EmployeesSearchBar/EmployeesSearchBar";

import { useDispatch } from "react-redux";
import { addEmployes, addDepartments } from "../../redux/slices/employeesSlice";

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

interface props {}

export const EmployeesContainer: React.FC<props> = (props) => {
  const { company_id } = useSelector((state: RootState) => state.globalReducer);
  const { employees } = useSelector(
    (state: RootState) => state.employeeReducer
  );

  const dispatch = useDispatch();

  useEffect(() => {
    const token = Cookies.get("csrftoken");
    if (token && employees.length === 0) {
      fetch(`/company/${company_id}/`, {
        method: "GET",
        headers: {
          "X-CSRFToken": token,
        },
      }).then((res) => {
        res.json().then((data) => {
          const employees: user[] = [];
          const departments: (string | number)[][] = [];
          data.departments.forEach((department: department) => {
            departments.push([department.id, department.name]);
            console.log(department);
            department.users.forEach((employee: user) => {
              employees.push(employee);
            });
          });
          dispatch(addDepartments({ departments }));
          dispatch(addEmployes({ employees }));
        });
      });
    }
  }, []);

  return (
    <>
      <EmployeesSearchBar />
      <Container>
        <EmployeesList />
      </Container>
    </>
  );
};
