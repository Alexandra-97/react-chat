import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: {
    id: 0,
    name: "Alex"
  }
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {}
});

export const { actions, reducer: userReducer } = userSlice;
