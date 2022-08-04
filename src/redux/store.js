import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
import airportReducer from "./slices/airportSlice";
import flightReducer from "./slices/flightsSlice";
import flightDetailsReducer from "./slices/flightDetailsSlice";
import weatherReducer from "./slices/weatherSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    airport: airportReducer,
    flight: flightReducer,
    flightDetails:flightDetailsReducer,
    weather:weatherReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      
      serializableCheck: false,
    }),
});
