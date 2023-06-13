import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { LoginState, User } from '../../../interfaces/LoginState.interfaces'
import { useToast } from '../../../ui-kit/Toast/Toast'
const initialState: LoginState = {
  isLoggedIn: false,
  user: null,
  token: null,
}

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    loginSuccess: (state, action: PayloadAction<LoginState>) => {
      state.isLoggedIn = action.payload.isLoggedIn
      state.user = action.payload.user
      state.token = action.payload.token
    },
    loginFailure: (state, action: PayloadAction<string>) => {
      state.isLoggedIn = false
      state.user = null
      state.token = action.payload
    },
    logout: (state) => {
      state.isLoggedIn = false
      state.user = null
      state.token = null
      localStorage.removeItem('habco_login');
      useToast('Logout Success', 'danger', 'Toast Messages')
    },
  },
})

export const { loginSuccess, loginFailure, logout } = loginSlice.actions
export const loginReducer = loginSlice.reducer
