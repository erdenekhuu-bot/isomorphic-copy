import { Button } from "rizzui";
import SimpleBar from "../ui/simplebar";
import EnvatoIcon from "../icons/envato";
import LayoutSwitcher from "./layout-switcher";
import AppDirection from "./app-direction";

export default function SettingsDrawer() {
  return (
    <>
      <SimpleBar className="h-[calc(100%-138px)]">
        <div className="px-5 py-6">
          <AppDirection />
          <LayoutSwitcher />
        </div>
      </SimpleBar>

      <SettingsFooterButton />
    </>
  );
}

function SettingsFooterButton() {
  return (
    <a
      href="https://themeforest.net/item/isomorphic-react-redux-admin-dashboard/20262330?ref=redqteam"
      target="_blank"
      className="grid grid-cols-1 border-t border-muted px-6 pt-4"
    >
      <Button size="lg" as="span" className={"text-base font-semibold"}>
        <EnvatoIcon className="me-2 h-5 w-5" />
        <span className="">Purchase for $24</span>
      </Button>
    </a>
  );
}
