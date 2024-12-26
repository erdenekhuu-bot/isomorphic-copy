import { metaObject } from "../../../config/site.config";
import ExecutiveDashboard from "../../shared/executive";

export const metadata = {
  ...metaObject("Executive Dashboard"),
};

export default function ExecutiveDashboardPage() {
  return <ExecutiveDashboard />;
}
