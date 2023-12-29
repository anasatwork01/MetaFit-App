import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: false,
    token: null,
    user: null,
  },
  reducers: {
    login(state, action) {
      state.isAuthenticated = true;
      state.token = action.payload.token;
      // state.user = action.payload.user;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.token = null;
      state.user = null;
    },
    setToken(state, action) {
      state.token = action.payload.token;
    },
    updateUser(state, action) {
      Object.assign(state.user, action.payload);
    },
  },
});

export const { login, logout, setToken, updateUser } = authSlice.actions;

export default authSlice;
