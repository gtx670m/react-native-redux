/**
 * @format
 */

import { AppRegistry } from "react-native";
import { name as appName } from "./app.json";
import App from "./App";
import { createStore } from "redux";
import { Provider } from "react-redux";
import React from "react";
import allReducers from "./reducers";

let store = createStore(allReducers);

const mainApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => mainApp);
