import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import Store from "./redux/store";

const root = document.getElementById("root");

// Use createRoot instead of ReactDOM.render
const rootComponent = (
  <Provider store={Store}>
    <App />
  </Provider>
);

if (root) {
  ReactDOM.createRoot(root).render(rootComponent);
}

// reportWebVitals();
