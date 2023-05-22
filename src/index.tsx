import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./App";
import { ShoppingCartGame } from "./api/concept";

const newGame = new ShoppingCartGame();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <App game={newGame} />
  </React.StrictMode>
);
