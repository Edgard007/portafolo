import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "antd/dist/antd.css";

import { ThemeProvider } from "styled-components";
import { global } from "./Config/variablesStyles";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={global}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
