import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface user {
  user_id: string;
}

interface CurrentState {
  user_id: string;
}

let initialState: CurrentState = {
  user_id: "",
};

const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    addUser(state, action: PayloadAction<user>) {
      const { user_id } = action.payload;
      state.user_id = user_id;
    },
  },
});

export const { addUser } = globalSlice.actions;

export default globalSlice.reducer;
