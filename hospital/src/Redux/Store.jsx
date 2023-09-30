import { configureStore } from '@reduxjs/toolkit'
import postReducer from "./LoginSlice"

export const store = configureStore({
  reducer: {
    posts:postReducer
  },
})