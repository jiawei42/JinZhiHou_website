import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
const root = ReactDOM.createRoot(document.getElementById("root"));
const script = document.createElement("script");
script.src = "https://kit.fontawesome.com/fd4f1b7d85.js";
script.crossOrigin = "anonymous";
script.onerror = () => {
  console.error("Failed to load Font Awesome.");
};
document.head.appendChild(script);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
