import React from "react";
import ReactDOM from "react-dom/client";
import "./sass/base/index.scss";
import "./sass/components/header.scss";
import "./sass/base/utility.scss";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
