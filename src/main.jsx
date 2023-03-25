import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Palette } from "./Theme";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Palette>
      <App />
    </Palette>
  </React.StrictMode>
);
