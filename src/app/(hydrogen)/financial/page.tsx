import FinancialDashboard from "../../shared/financial/dashboard";
import { metaObject } from "../../../config/site.config";

export const metadata = {
  ...metaObject("Financial"),
};

export default function FinancialPage() {
  return <FinancialDashboard />;
}
