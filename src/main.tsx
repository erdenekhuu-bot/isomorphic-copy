import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "./app/(hydrogen)/layout";
import SignIn from "./app/signin/page";
import SignUp from "./app/auth/(sign-up)/page";
import WelcomePage from "./app/(other-pages)/welcome/page";
import ComingSoonPage from "./app/(other-pages)/coming-soon/page";
import AccessDeniedPage from "./app/(other-pages)/access-denied/page";
import NotFoundPage from "./app/(other-pages)/not-found/page";
import MaintenancePage from "./app/(other-pages)/maintenance/page";
import ForgetPasswordPage from "./app/auth/(forgot-password)/page";
import OtpPage from "./app/auth/(otp)/page";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/auth/sign-in-1" element={<SignIn />} />
      <Route path="/auth/sign-up-1" element={<SignUp />} />
      <Route path="*" element={<DefaultLayout />} />
      <Route path="/welcome" element={<WelcomePage />} />
      <Route path="/coming-soon" element={<ComingSoonPage />} />
      <Route path="/access-denied" element={<AccessDeniedPage />} />
      <Route path="/not-found" element={<NotFoundPage />} />
      <Route path="/maintenance" element={<MaintenancePage />} />
      <Route path="/auth/forgot-password-1" element={<ForgetPasswordPage />} />
      <Route path="/auth/otp-1" element={<OtpPage />} />
    </Routes>
  </BrowserRouter>
);
