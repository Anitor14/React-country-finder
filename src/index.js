import React from "react";
import ReactDOM from "react-dom";
import "./country.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

import { AppProvider } from "./context";
ReactDOM.render(
  <BrowserRouter> 
  {/* This is to make sure that we can use the react-router in app */}
    <AppProvider>
      <App />
    </AppProvider>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
