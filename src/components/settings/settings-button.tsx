import { useEffect } from "react";
import { useDirection } from "../../hooks/use-direction";
import CogSolidIcon from "../icons/cog-solid";
import { ActionIcon } from "rizzui";
import cn from "../../utils/class-names";
import DrawerHeader from "./drawer-header";
import { usePresets } from "../../config/color-presets";
import {
  useApplyColorPreset,
  useColorPresets,
} from "../../hooks/use-theme-color";
import { useDrawer } from "../../app/shared/drawer-views/use-drawer";

export default function SettingsButton({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  const COLOR_PRESETS = usePresets();

  const { direction } = useDirection();
  const { colorPresets } = useColorPresets();

  useEffect(() => {
    document.documentElement.dir = direction ?? "ltr";
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [direction]);

  return (
    <ActionIcon
      aria-label="Settings"
      variant="text"
      className={cn(
        "relative h-[34px] w-[34px] shadow backdrop-blur-md dark:bg-gray-100 md:h-9 md:w-9",
        className
      )}
      onClick={() => {}}
    >
      {children ? (
        children
      ) : (
        <CogSolidIcon
          strokeWidth={1.8}
          className="h-[22px] w-auto animate-spin-slow"
        />
      )}
    </ActionIcon>
  );
}
