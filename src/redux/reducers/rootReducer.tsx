import { combineReducers } from "@reduxjs/toolkit";
import globalReducer from "../slices/globalSlice";

const rootReducer = combineReducers({
  globalReducer: globalReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
