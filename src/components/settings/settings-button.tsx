import { useEffect } from "react";
import { useDirection } from "../../hooks/use-direction";
import CogSolidIcon from "../icons/cog-solid";
import { ActionIcon } from "rizzui";
import cn from "../../utils/class-names";
import DrawerHeader from "./drawer-header";

export default function SettingsButton({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  const { direction } = useDirection();

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