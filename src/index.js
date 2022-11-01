import React from "react";
import ReactDOM from "react-dom/client";
import RouteSwitch from "./router/RouteSwitch";
import "./css/reset.css";
import "./css/styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouteSwitch />
  </React.StrictMode>
);
