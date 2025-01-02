import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "./app/(hydrogen)/layout";
import SignIn from "./app/signin/page";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/auth/sign-in-1" element={<SignIn />} />
      <Route path="*" element={<DefaultLayout />} />
    </Routes>
  </BrowserRouter>
);
