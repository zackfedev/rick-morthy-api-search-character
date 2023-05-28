import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Palette } from "./Theme";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Palette>
      <App />
    </Palette>
  </React.StrictMode>
);
