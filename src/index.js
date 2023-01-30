import { createRoot } from "react-dom/client";
import "./styles/build/index.css";
import React from "react";
import App from "./App";

const root = createRoot(document.body.querySelector("#root"));
root.render(<App />);
