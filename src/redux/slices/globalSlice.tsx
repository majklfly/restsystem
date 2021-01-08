import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface user {
  user_id: string;
  company: string;
  access_employees: boolean;
  access_stock: boolean;
  access_training: boolean;
  access_orders: boolean;
  access_rota: boolean;
}

interface CurrentState {
  user_id: string;
  company: string;
  access_employees: boolean;
  access_stock: boolean;
  access_training: boolean;
  access_orders: boolean;
  access_rota: boolean;
}

let initialState: CurrentState = {
  user_id: "",
  company: "",
  access_employees: false,
  access_stock: false,
  access_training: false,
  access_orders: false,
  access_rota: false,
};

const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    addUser(state, action: PayloadAction<user>) {
      const {
        user_id,
        company,
        access_employees,
        access_stock,
        access_training,
        access_orders,
        access_rota,
      } = action.payload;
      state.user_id = user_id;
      state.company = company;
      state.access_employees = access_employees;
      state.access_stock = access_stock;
      state.access_training = access_training;
      state.access_orders = access_orders;
      state.access_rota = access_rota;
    },
  },
});

export const { addUser } = globalSlice.actions;

export default globalSlice.reducer;
