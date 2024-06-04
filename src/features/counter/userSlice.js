import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: [],
  modalSlice: false,
  delete: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, { payload }) => {
      state.user.push(payload);
    },
    modaBox: (state, { payload }) => {
      state.modalSlice = payload;
    },
    deleteUser: (state, { payload }) => {
     state.user = payload
    },
  },
});
export const { addUser, modaBox , deleteUser } = userSlice.actions;

export default userSlice.reducer;
