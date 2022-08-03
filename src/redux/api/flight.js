// /test/aodb-rest/searchFlightByDate
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getFlightsByDate = createAsyncThunk("api/flights", async (data) => {
  console.log(data);
  const response = await axios.post(
"https://api.turkishairlines.com/test/aodb-rest/searchFlightByDate",
{
	 date:data.date,
	scheduledDepartureAirport:data.scheduledDepartureAirport,
	scheduledArrivalAirport:data.scheduledArrivalAirport, 
}
  );
  console.log(response.data);
   return response.data;
});
