import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slices/counterSlice'
import airportSlice from './slices/airportSlice'
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    airport:airportSlice
  },
})