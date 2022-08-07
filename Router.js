import * as React from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { getAirports } from "./src/redux/api/airport";
import THY_Drawer from "./src/components/DrawerNavigation/Drawer";

const App = () => {
  axios.defaults.headers.common = {
    apikey: "l7xxf90f2f436d3b48bba2a0d0ef5aec7008",
    apisecret: "885c340e96ac4c7a9638c021ccbe8a01",
  };

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getAirports());
  }, []);

  return <THY_Drawer />;
};
export default App;
