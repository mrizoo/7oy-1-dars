import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [123],
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, { payload }) => {
      state.users.push = payload;
    },
    decrement: (state, { payload }) => {
      state.users.push(payload);
    },
    incrementByAmount: (state, { payload }) => {
      state.users.push({
        user: payload,
      });
    },
    addUser: (state, { payload }) => {
      state.users.push(payload);
    },
  },
});

export const { decrement, addUser } = counterSlice.actions;

export default counterSlice.reducer;
