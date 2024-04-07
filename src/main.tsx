import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App/App.tsx";

import "./styles/reset.scss"
import "./styles/common.scss"
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
