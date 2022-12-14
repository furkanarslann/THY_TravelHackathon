import { configureStore } from "@reduxjs/toolkit";
import airportReducer from "./slices/airportSlice";
import flightReducer from "./slices/flightsSlice";
import flightDetailsReducer from "./slices/flightDetailsSlice";
import weatherReducer from "./slices/weatherSlice";
import bagReducer from "./slices/bagSlice";
import lostBagReducer from "./slices/lostBagSlice";
import drawerTriggerReducer  from "./slices/drawerTriggerSlice";
export const store = configureStore({
  reducer: {
    airport: airportReducer,
    flight: flightReducer,
    flightDetails: flightDetailsReducer,
    weather: weatherReducer,
    bag: bagReducer,
    lostBag: lostBagReducer,
    drawerTrigger:drawerTriggerReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
