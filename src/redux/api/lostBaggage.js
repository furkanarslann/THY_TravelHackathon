import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getLostBaggage = createAsyncThunk("api/getLostBag", async () => {
  const URL = "https://api.turkishairlines.com/test/LostBaggageService";
  const requestBody = {
    lastName: "BASOGLU",
    fileReferenceNumber: "HDQTK10054",
  };

  const response = await axios.post(URL, requestBody);

  return response.data.data.data.LostBaggageFile;
});
