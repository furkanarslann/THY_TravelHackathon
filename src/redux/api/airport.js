import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAirports = createAsyncThunk("api/airports", async () => {

   const response= await axios
   .post(
    process.env.API_URL+"/test/getPortList",
     
     {
       "requestHeader": {
         "clientUsername": "OPENAPI",
         "clientTransactionId": "CLIENT_TEST_1",
         "channel": "WEB",
         "languageCode":"TR",
         "airlineCode":"TK"
       }
     }
   )
  

    
   return response.data.data.Port;
});
