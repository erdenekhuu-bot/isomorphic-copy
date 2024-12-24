import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import DefaultLayout from "./app/(hydrogen)/layout";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <DefaultLayout />
  </BrowserRouter>
);
