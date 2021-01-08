import React, { useState, useEffect } from "react";
import { Container } from "./styles";
import Cookies from "js-cookie";

import { RootState } from "../../redux/reducers/rootReducer";
import { useSelector } from "react-redux";

import { EmployeesList } from "../../components/EmployeesList/EmployeesList";

interface props {}

export const EmployeesContainer: React.FC<props> = (props) => {
  const { company_id } = useSelector((state: RootState) => state.globalReducer);
  const [data, setData] = useState({});

  useEffect(() => {
    const token = Cookies.get("csrftoken");
    if (token) {
      fetch(`/company/${company_id}`, {
        method: "GET",
        headers: {
          "X-CSRFToken": token,
        },
      }).then((res) => {
        res.json().then((data) => {
          setData(data);
        });
      });
    }
  }, [company_id]);

  return (
    <Container>
      <EmployeesList data={data} />
    </Container>
  );
};
