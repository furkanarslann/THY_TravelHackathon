import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
import airportReducer from "./slices/airportSlice";
import flightReducer from "./slices/flightsSlice";
import flightDetailsReducer from "./slices/flightDetailsSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    airport: airportReducer,
    flight: flightReducer,
    flightDetails:flightDetailsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      
      serializableCheck: false,
    }),
});
