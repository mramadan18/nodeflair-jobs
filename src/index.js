import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Import bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
// Global style
import "./index.css";

// Redux Toolkit
import { Provider } from "react-redux";
import { store } from "./Toolkit/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
