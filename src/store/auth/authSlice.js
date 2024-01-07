import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    status: 'no auth', /* auth - checking*/
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMessage: null,

  },
  reducers: {
    login: (state, { payload }) => {
      state.status = payload.status

    },
    logout: (state, { payload }) => {
      state.status = 'auth',
        state.uid = payload.uid

    },
    checkingCredential: (state) => {
      state.status = 'checking'
    }
  }
});


export const { login, logout, checkingCredential } = authSlice.actions;