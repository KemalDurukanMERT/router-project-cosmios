import { configureStore } from '@reduxjs/toolkit'
import userReducer from "../features/userSlice"


export const store = configureStore({
  reducer: {

    auth: userReducer

  },
})