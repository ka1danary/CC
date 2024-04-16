import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App/App.tsx";

import "./styles/reset.scss";
import "./styles/common.scss";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { setupStore } from "./store/store.ts";

const store = setupStore()

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
