import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getBags = createAsyncThunk("api/getBags", async (bagTagNumber) => {
  const URL = "https://api.turkishairlines.com/test/baggagesDetails";
  const requestBody = {
    departureAirport: "JFK", //0TK546736
    arrivalAirport: "WAW",
  };
  const response = await axios.post(URL, requestBody).then(res=>res.data.data.filter((item)=>item.baggageInfo.bagTagNumber==bagTagNumber));

console.log(response);
  return response;
});
/* 
 export const getLostBaggage = createAsyncThunk("api/getLostBag", async (bagTagNumber) => {
  const URL = "https://api.turkishairlines.com/test/LostBaggageService";
  const requestBody = { 
    lastName:"BASOGLU",
    fileReferenceNumber:"HDQTK10054"
  }
  //const response = await axios.post(URL, requestBody).then(res=>res.data.data.data.LostBaggageFile.bagInformation.bagDetails.filter((item)=>item.tagNumber==bagTagNumber));
  const response = await axios.post(URL, requestBody);

console.log(response.data.data.data.LostBaggageFile);
  return response;
}); 
 */
