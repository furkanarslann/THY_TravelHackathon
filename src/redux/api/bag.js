import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getBags = createAsyncThunk("api/getBags", async (bagTagNumber) => {
  const URL = "https://api.turkishairlines.com/test/baggagesDetails";
  const requestBody = {
    departureAirport: "JFK",
    arrivalAirport: "WAW",
  };
  const response = await axios
    .post(URL, requestBody)
    .then(
      (res) =>
        res.data.data.filter(
          (item) => item.baggageInfo.bagTagNumber == bagTagNumber
        )[0]
    );

  return response;
});
