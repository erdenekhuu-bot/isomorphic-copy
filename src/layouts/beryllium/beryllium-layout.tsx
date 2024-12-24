import Header from "./beryllium-header";
import BerylliumLeftSidebarFixed from "./beryllium-left-sidebar-fixed";
import cn from "../../utils/class-names";
import SidebarExpandable from "./beryllium-sidebar-expanded";
import { useBerylliumSidebars } from "./beryllium-utils";

export default function BerylliumLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { expandedLeft } = useBerylliumSidebars();

  return (
    <main className={cn("flex min-h-screen flex-grow")}>
      <BerylliumLeftSidebarFixed />
      <SidebarExpandable />
      <div className="flex w-full flex-col ">
        <Header className="xl:ms-[88px]" />
        <div
          className={cn(
            "flex flex-grow flex-col gap-4 px-4 pb-6 duration-200 md:px-5 lg:pb-8  xl:pe-8 ",
            expandedLeft ? "xl:ps-[414px]" : "xl:ps-[110px]"
          )}
        >
          <div className="grow xl:mt-4">{children}</div>
        </div>
      </div>
    </main>
  );
}
