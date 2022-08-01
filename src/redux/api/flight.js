// /test/aodb-rest/searchFlightByDate
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getFlightsByDate = createAsyncThunk("api/flights", async () => {
  const response = await axios.post(
"https://api.turkishairlines.com/test/aodb-rest/searchFlightByDate",
{
	date:"20220802",
	scheduledDepartureAirport:"IST",
	scheduledArrivalAirport:"JFK"
}
  );
console.log(response.data);
  return response.data.data;
});
