import cn from "../../utils/class-names";
import SimpleBar from "../../components/ui/simplebar";
import { siteConfig } from "../../config/site.config";
import StatusBadge from "../../components/get-status-badge";
import { menuItems } from "./helium-menu-items";
import { useLocation } from "react-router-dom";
import { Fragment } from "react";
import { Title, Collapse } from "rizzui";
import { PiCaretDownBold } from "react-icons/pi";
import { HeliumSidebarMenu } from "./helium-sidebar-menu";

export default function HeliumSidebar({ className }: { className?: string }) {
  return (
    <aside
      className={cn(
        "fixed bottom-0 start-0 z-50 h-full w-[284px] dark:bg-gray-100/50 xl:p-5 2xl:w-[308px]",
        className
      )}
    >
      <div className="h-full bg-gray-900 p-1.5 pl-0  pr-1.5 dark:bg-gray-100/70 xl:rounded-2xl">
        <div className="sticky top-0 z-40 flex justify-center px-6 pb-5 pt-5 2xl:px-8 2xl:pt-6">
          <a href={"/"} aria-label="Site Logo">
            <img
              src="/logo-short-light.svg"
              alt={siteConfig.title}
              width={58}
              height={35}
            />
          </a>
        </div>

        <SimpleBar className="h-[calc(100%-80px)]">
          <HeliumSidebarMenu />
        </SimpleBar>
      </div>
    </aside>
  );
}
