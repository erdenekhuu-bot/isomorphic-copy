import dayjs from "dayjs";
import AvgDeliveryTime from "./avg-delivery-time";
import ComplaintRate from "./complaint-rate";
import ComplaintReason from "./complaint-reason";
import { DeliveryStatus } from "./delivery-status";
import DispatchPlanning from "./dispatch-planning";
import FleetStatus from "./fleet-status";
import LoadingWorkflow from "./loading-workflow";
import OpenSalesOrder from "./open-sales-order";
import ProfitChart from "./profit";
import StatCards from "./stat-cards";
import TopCustomer from "./top-customer";
import TopShipmentCountries from "./top-shipment-countries";
import ShipmentTableWidget from "./shipment-table";

const thisMonth = dayjs(new Date()).format("MMMM YYYY");

export default function LogisticsDashboard() {
  return (
    <div className="@container">
      <div className="grid grid-cols-12 gap-6 3xl:gap-8">
        <StatCards className="col-span-full" />

        <OpenSalesOrder className="col-span-full @3xl:col-span-6 @[1429px]:col-span-4" />
        <DispatchPlanning className="col-span-full @3xl:col-span-6 @[1429px]:col-span-4" />
        <LoadingWorkflow className="col-span-full @3xl:col-span-6 @[1429px]:col-span-4" />

        <FleetStatus className="col-span-full @3xl:col-span-6 @[1429px]:col-span-4" />
        <ProfitChart className="col-span-full @3xl:col-span-full @[1429px]:col-span-8" />

        <ShipmentTableWidget
          title="Pending Shipments"
          description={`Summary of pending shipments of ${thisMonth}`}
          className="col-span-full"
        />

        <DeliveryStatus className="col-span-full" />

        <AvgDeliveryTime className="col-span-full @4xl:col-span-6 @7xl:col-span-4" />
        <ComplaintRate className="col-span-full @4xl:col-span-6 @7xl:col-span-4" />
        <ComplaintReason className="col-span-full @4xl:col-span-6 @7xl:col-span-4 @7xl:[&_.recharts-responsive-container]:!w-11/12 @[88rem]:[&_.recharts-responsive-container]:!w-full" />
        <TopShipmentCountries className="col-span-full @4xl:col-span-6 @7xl:col-span-4  @7xl:[&_.recharts-responsive-container]:!w-11/12 @[88rem]:[&_.recharts-responsive-container]:!w-full" />

        <TopCustomer className="col-span-full @3xl:col-span-full @5xl:col-span-full @7xl:col-span-8" />

        <ShipmentTableWidget
          title="Recent Shipments"
          description={`Summary of recent shipments of ${thisMonth}`}
          className="col-span-full"
        />
      </div>
    </div>
  );
}
