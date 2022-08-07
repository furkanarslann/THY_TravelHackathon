import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getFlightsByDate = createAsyncThunk(
  "api/flights",
  async ({ date, scheduledDepartureAirport, scheduledArrivalAirport }) => {
    const response = await axios.post(
      "https://api.turkishairlines.com/test/aodb-rest/searchFlightByDate",
      {
        date,
        scheduledDepartureAirport,
        scheduledArrivalAirport,
      }
    );
    return response.data.data;
  }
);
