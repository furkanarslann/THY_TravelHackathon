import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

/* export const getLostBaggage = createAsyncThunk(
  "api/getLostBag",
  async (bagTagNumber) => {
    const URL = "https://api.turkishairlines.com/test/LostBaggageService";
    const requestBody = {
      lastName: "BASOGLU",
      fileReferenceNumber: "HDQTK10054",
    };
    //const response = await axios.post(URL, requestBody).then(res=>res.data.data.data.LostBaggageFile.bagInformation.bagDetails.filter((item)=>item.tagNumber==bagTagNumber));
    const response = await axios.post(URL, requestBody);

    console.log(response.data.data.data.LostBaggageFile);
    return response;
  }
); */

export const getLostBaggage = createAsyncThunk("api/lostBaggage", async () => {
  const URL = "https://api.turkishairlines.com/test/LostBaggageService";
  const body = {
    lastName: "BASOGLU",
    fileReferenceNumber: "HDQTK10054",
  };
  console.log("====================================");
  console.log("Calisior1.");
  console.log("====================================");

  const response = await axios.post(URL, body);

  console.log("====================================");
  console.log("Calisior2.");
  console.log("====================================");

  return response.data.data.data.LostBaggageFile;
});

/* export const getLostBaggage = async () => {
  const response = await axios.get(
    "https://api.turkishairlines.com/test/LostBaggageService"
  );

  console.log("====================================");
  console.log(response);
  console.log("====================================");
}; */
