import cn from "../../../utils/class-names";
import StatsCards from "./stats-cards";
import RevenueExpense from "./revenue-expense";
import Forecast from "./forecast";
import OperatingCashFlow from "./operating-cash-flow";
import ArrBySignUp from "./arr-by-signup";
import ActiveUsers from "./active-users";
import MRRReport from "./mrr-report";
import SocialFollowers from "./social-followers";
import WebAnalytics from "./web-analytics";
import BiggestDeal from "./biggest-deal";
import RecentCustomers from "./recent-customers";
import TotalProfitLoss from "./total-profit-loss";
import MonthlySalesGrowth from "./monthly-sales-growth";
import SalesByCategory from "./sales-by-category";

interface IndexProps {
  className?: string;
}

export default function ExecutiveDashboard({ className }: IndexProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-5 @container 2xl:gap-x-6 2xl:gap-y-7",
        className
      )}
    >
      <StatsCards />
      <div className="grid grid-cols-1 gap-5 @4xl:grid-cols-2 2xl:gap-x-6 2xl:gap-y-7">
        <RevenueExpense />
        <Forecast />
      </div>
      <TotalProfitLoss />
      <div className="grid grid-cols-1 gap-5 @4xl:grid-cols-2 @7xl:grid-cols-4 2xl:gap-x-6 2xl:gap-y-7">
        <MRRReport />
        <SocialFollowers />
        <WebAnalytics />
        <BiggestDeal />
      </div>
      <div className="grid grid-cols-1 gap-5 @4xl:grid-cols-2 2xl:gap-x-6 2xl:gap-y-7">
        <SalesByCategory />
        <MonthlySalesGrowth />
      </div>
      <OperatingCashFlow />
      <div className="grid grid-cols-1 gap-5 @4xl:grid-cols-2 2xl:gap-x-6 2xl:gap-y-7">
        <ArrBySignUp />
        <ActiveUsers />
      </div>
      <RecentCustomers />
    </div>
  );
}
