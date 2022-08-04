// /test/aodb-rest/searchFlightByDate
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getWeather = createAsyncThunk(
  "weather/getWeather",
  async (city) => {
    const URL = `http://api.weatherapi.com/v1/forecast.json?key=46994d65c1bd45f493882412220408&q=${city}&days=10&aqi=no&alerts=no`;

    const response = await axios.get(URL);
    console.log(response.data);
    return response.data;
  }
);
