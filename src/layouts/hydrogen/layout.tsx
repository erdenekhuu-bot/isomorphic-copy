import Header from "./header";
import Sidebar from "./sidebar";
import FileDashboardPage from "../../app/(hydrogen)/page";
import AppointmentPage from "../../app/(hydrogen)/appointment/page";
import ExecutiveDashboardPage from "../../app/(hydrogen)/executive/page";
import JobBoardPage from "../../app/(hydrogen)/job-board/page";
import FinancialPage from "../../app/(hydrogen)/financial/page";
import LogisticsPage from "../../app/(hydrogen)/logistics/page";
import EcommerceDashboardPage from "../../app/(hydrogen)/ecommerce/page";
import AnalyticsPage from "../../app/(hydrogen)/analytics/page";
import SupportDashboardPage from "../../app/(hydrogen)/support/page";
import CheckoutPage from "../../app/(hydrogen)/ecommerce/checkout/page";
import CartPage from "../../app/(hydrogen)/ecommerce/cart/page";
import ProfilePage from "../../app/(hydrogen)/profile/page";
import { Routes, Route } from "react-router-dom";
import BasicTablePage from "../../app/(hydrogen)/tables/basic/page";
import CollapsibleTablePage from "../../app/(hydrogen)/tables/collapsible/page";
import EnhancedTablePage from "../../app/(hydrogen)/tables/enhanced/page";
import StickyTablePage from "../../app/(hydrogen)/tables/sticky-header/page";
import PaginationTablePage from "../../app/(hydrogen)/tables/pagination/page";
import SearchTablePage from "../../app/(hydrogen)/tables/search/page";
import TanStackTableBasic from "../../app/(hydrogen)/tables/tan-table/page";
import TanStackTableCollapsible from "../../app/(hydrogen)/tables/tan-table-collapsible/page";

export default function HydrogenLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex min-h-screen flex-grow ">
      <Sidebar className="fixed hidden dark:bg-gray-50 xl:block" />
      <div className="flex w-full flex-col xl:ms-[270px] xl:w-[calc(100%-270px)] 2xl:ms-72 2xl:w-[calc(100%-288px)]">
        <Header />
        <div className="flex flex-grow flex-col px-4 pb-6 pt-2 md:px-5 lg:px-6 lg:pb-8 3xl:px-8 3xl:pt-4 4xl:px-10 4xl:pb-9">
          <Routes>
            <Route path="/" element={<FileDashboardPage />} />
            <Route path="/appointment" element={<AppointmentPage />} />
            <Route path="/executive" element={<ExecutiveDashboardPage />} />
            <Route path="/job-board" element={<JobBoardPage />} />
            <Route path="/financial" element={<FinancialPage />} />
            <Route path="/logistics" element={<LogisticsPage />} />

            <Route path="/ecommerce" element={<EcommerceDashboardPage />}>
              <Route path="checkout" element={<CheckoutPage />} />
              <Route path="cart" element={<CartPage />} />
            </Route>

            <Route path="/analytics" element={<AnalyticsPage />} />
            <Route path="/support" element={<SupportDashboardPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="tables">
              <Route path="basic" element={<BasicTablePage />} />
              <Route path="collapsible" element={<CollapsibleTablePage />} />
              <Route path="enhanced" element={<EnhancedTablePage />} />
              <Route path="sticky-header" element={<StickyTablePage />} />
              <Route path="pagination" element={<PaginationTablePage />} />
              <Route path="search" element={<SearchTablePage />} />
              <Route path="tan-table" element={<TanStackTableBasic />} />
              <Route
                path="tan-table-collapsible"
                element={<TanStackTableCollapsible />}
              />
            </Route>
          </Routes>
        </div>
      </div>
    </main>
  );
}
