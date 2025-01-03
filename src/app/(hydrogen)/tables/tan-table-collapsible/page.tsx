import ImportButton from "../../../shared/import-button";
import PageHeader from "../../../shared/page-header";
import TableCollapsible from "../../../../components/tan-table/collapsible";
import { routes } from "../../../../config/routes";

const pageHeader = {
  title: "Collapsible",
  breadcrumb: [
    {
      href: routes.eCommerce.dashboard,
      name: "Home",
    },
    {
      name: "Table",
    },
    {
      name: "Collapsible",
    },
  ],
};

export default function TanStackTableCollapsible() {
  return (
    <>
      <PageHeader title={pageHeader.title} breadcrumb={pageHeader.breadcrumb}>
        <div className="mt-4 flex items-center gap-3 @lg:mt-0">
          {/* <ExportButton data={data} fileName={fileName} header={header} /> */}
          <ImportButton title={"Import File"} />
        </div>
      </PageHeader>

      <TableCollapsible />
    </>
  );
}
