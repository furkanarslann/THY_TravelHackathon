// /test/aodb-rest/searchFlightByDate
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getFlightsByDate = createAsyncThunk("api/flights", async (data) => {
 
  const response = await axios.post(
"https://api.turkishairlines.com/test/aodb-rest/searchFlightByDate",
{
	 date:data.date,
	scheduledDepartureAirport:"IST",
	scheduledArrivalAirport:"BER", 
}
  );
  console.log(response.data);
   return response.data.data;
});
