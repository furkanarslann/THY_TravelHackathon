import { configureStore } from "@reduxjs/toolkit";
import airportReducer from "./slices/airportSlice";
import flightReducer from "./slices/flightsSlice";
import flightDetailsReducer from "./slices/flightDetailsSlice";
import weatherReducer from "./slices/weatherSlice";
import bagSlice from "./slices/bagSlice";

export const store = configureStore({
  reducer: {
    airport: airportReducer,
    flight: flightReducer,
    flightDetails:flightDetailsReducer,
    weather:weatherReducer,
    bag:bagSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      
      serializableCheck: false,
    }),
});
