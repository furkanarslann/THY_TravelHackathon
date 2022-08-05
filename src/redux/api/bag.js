import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getBags = createAsyncThunk("api/airports", async () => {

    const URL="https://api.turkishairlines.com/test/baggagesDetails";
    const requestBody={
        departureAirport: "JFK",
        arrivalAirport: "WAW"
   }
   const response= await axios
   .post(URL,requestBody)

   await response.data.data.forEach((item)=>{
 
    if(item.baggageInfo.bagTagNumber=="0TK407553"){
     console.log(item);
    }
 }
 )
  
   console.log(response.data.data);
 });
