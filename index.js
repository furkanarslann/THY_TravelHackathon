import * as React from "react";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";

import Routes from "./Router";

export default function ReactApp() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}
