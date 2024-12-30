import EcommerceDashboard from "../../shared/ecommerce/dashboard";
import { metaObject } from "../../../config/site.config";
import { Outlet } from "react-router-dom";

export const metadata = {
  ...metaObject("E-Commerce"),
};

export default function EcommerceDashboardPage() {
  //return <EcommerceDashboard />;
  return (
    <div>
      <EcommerceDashboard />
      <Outlet />
    </div>
  );
}
