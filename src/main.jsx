import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Grid from "./Grid.jsx";

createRoot(document.getElementById("root")).render(
  <>
    <Grid />
  </>
);
