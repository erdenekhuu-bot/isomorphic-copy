import Burn from "./burn";
import Spending from "./spending";
import Exchange from "./exchange";
import CashFlow from "./cash-flow";
import Investment from "./investment/investment";
import CashInBank from "./cash-in-bank";
import BudgetStatus from "./budget-status";
import ExpenseHistory from "./expense-history";
import TotalStatistics from "./total-statistics";
import TransactionHistoryTable from "./transaction-history-table";
import IncomeStatement from "./income-statement";
import FileStats from "./transaction-states";

export default function FinancialDashboard() {
  return (
    <div className="grid grid-cols-6 gap-6 @container">
      <FileStats className="col-span-full" />
      <TotalStatistics className="col-span-full @[90rem]:col-span-4" />
      <BudgetStatus className="col-span-full @[59rem]:col-span-3 @[90rem]:col-span-2" />
      <CashFlow className="col-span-full" />
      <CashInBank className="col-span-full @[59rem]:col-span-3 @[90rem]:col-span-2" />
      <Burn className="col-span-full @[59rem]:col-span-3 @[90rem]:col-span-2" />
      <ExpenseHistory className="col-span-full @[59rem]:col-span-3 @[59rem]:col-start-4 @[59rem]:row-start-3 @[90rem]:col-span-2 @[90rem]:col-start-auto @[90rem]:row-start-auto" />
      <IncomeStatement className="col-span-full" />
      <TransactionHistoryTable className="col-span-full" />
      <Spending className="col-span-full @[59rem]:col-span-3 @[90rem]:col-span-2" />
      <Exchange className="col-span-full  @[59rem]:col-span-3 @[90rem]:col-span-2" />
      <Investment className="col-span-full  @[59rem]:col-span-3 @[90rem]:col-span-2" />
    </div>
  );
}
