import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    phone: null,
    isAuthenticated: false,
  },
  reducers: {
    login(state, action) {
      state.phone = action.payload;
      state.isAuthenticated = true;
    },
    logout(state) {
      state.phone = null;
      state.isAuthenticated = false;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
