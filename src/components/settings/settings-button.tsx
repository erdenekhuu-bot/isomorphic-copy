import { useEffect } from "react";
import { useDirection } from "../../hooks/use-direction";
import CogSolidIcon from "../icons/cog-solid";
import { ActionIcon } from "rizzui";
import cn from "../../utils/class-names";
import DrawerHeader from "./drawer-header";

const SettingsDrawer = dynamic(
  () => import("@/components/settings/settings-drawer"),
  {
    ssr: false,
  }
);
