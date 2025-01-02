import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "./app/(hydrogen)/layout";
import SignIn from "./app/signin/page";
import SignUp from "./app/auth/(sign-up)/page";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/auth/sign-in-1" element={<SignIn />} />
      <Route path="/auth/sign-up-1" element={<SignUp />} />
      <Route path="*" element={<DefaultLayout />} />
    </Routes>
  </BrowserRouter>
);
