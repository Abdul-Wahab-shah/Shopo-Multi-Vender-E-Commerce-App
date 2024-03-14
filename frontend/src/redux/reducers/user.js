import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  loading: false,
  error: null,
  user: null,
};

export const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase('user/loadUserRequest', (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase('user/loadUserSuccess', (state, action) => {
      state.isAuthenticated = true;
      state.loading = false;
      state.user = action.payload;
      state.error = null;
    })
    .addCase('user/loadUserFail', (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.isAuthenticated = false;
    })
    .addCase('user/clearErrors', (state) => {
      state.error = null;
    });
});
