import React from "react";
import ReactDOM from "react-dom/client";
import RouteSwitch from "./router/RouteSwitch";
import "normalize.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouteSwitch />
  </React.StrictMode>
);
