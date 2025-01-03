import PageHeader, { PageHeaderTypes } from "../../shared/page-header";
import ImportButton from "../../shared/import-button";
import ExportButton from "../../shared/export-button";

type TableLayoutProps = {
  data: unknown[];
  header: string;
  fileName: string;
} & PageHeaderTypes;

export default function TableLayout({
  data,
  header,
  fileName,
  children,
  ...props
}: React.PropsWithChildren<TableLayoutProps>) {
  return (
    <>
      <PageHeader {...props}>
        <div className="mt-4 flex items-center gap-3 @lg:mt-0">
          <ExportButton data={data} fileName={fileName} header={header} />
          <ImportButton title={"Import File"} />
        </div>
      </PageHeader>

      {children}
    </>
  );
}
