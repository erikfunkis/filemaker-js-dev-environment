import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import "regenerator-runtime/runtime.js";
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./src/App.tsx";

// Render your React component instead
const rootEl = document.getElementById("app");
const root = createRoot(rootEl);
root.render(<App />);
