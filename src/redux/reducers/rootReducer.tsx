import { combineReducers } from "@reduxjs/toolkit";
import globalReducer from "../slices/globalSlice";
import employeeReducer from "../slices/employeesSlice";

const rootReducer = combineReducers({
  globalReducer: globalReducer,
  employeeReducer: employeeReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
