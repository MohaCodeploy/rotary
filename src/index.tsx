import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./App";

export interface Api {
  readTimeLeft(id: string): number;
}

class API implements Api {
  readTimeLeft(id: string): number {
    return 0;
  }
}

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
