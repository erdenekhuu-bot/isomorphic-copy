import EcommerceDashboard from "../../shared/ecommerce/dashboard";
import { metaObject } from "../../../config/site.config";

export const metadata = {
  ...metaObject("E-Commerce"),
};

export default function EcommerceDashboardPage() {
  return <EcommerceDashboard />;
}
