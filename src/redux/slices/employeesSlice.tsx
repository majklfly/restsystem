import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface user {
  firstName: string;
  lastName: string;
  email: string;
  date_joined: string;
  company: string;
  department: string;
}

interface departmentsList {
  departments: (string | number)[][];
}

interface employeesList {
  employees: user[];
}

interface currentState {
  employees: user[];
  departments: (string | number)[][];
}

let initialState: currentState = {
  employees: [],
  departments: [],
};

const EmployeesSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    addEmployes(state, action: PayloadAction<employeesList>) {
      const { employees } = action.payload;
      state.employees = employees;
    },
    addDepartments(state, action: PayloadAction<departmentsList>) {
      const { departments } = action.payload;
      state.departments = departments;
    },
  },
});

export const { addEmployes, addDepartments } = EmployeesSlice.actions;

export default EmployeesSlice.reducer;
