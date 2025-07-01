import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import EcommerceNavbar from "./nav.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <EcommerceNavbar />
    <App />
  </StrictMode>
);
