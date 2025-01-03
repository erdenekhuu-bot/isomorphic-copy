import { lazy } from "react";
import { Button } from "rizzui";
import cn from "../../utils/class-names";
import { PiArrowLineDownBold } from "react-icons/pi";
import { useModal } from "./modal-views/use-modal";

const FileUpload = lazy(() => import("../shared/file-upload"));

type ImportButtonProps = {
  title?: string;
  modalBtnLabel?: string;
  className?: string;
  buttonLabel?: string;
};

export default function ImportButton({
  title,
  modalBtnLabel = "Import File",
  className,
  buttonLabel = "Import",
}: React.PropsWithChildren<ImportButtonProps>) {
  const { openModal } = useModal();

  return (
    <Button
      onClick={() =>
        openModal({
          view: (
            <FileUpload
              label={title}
              accept="csv"
              multiple={false}
              btnLabel={modalBtnLabel}
            />
          ),
          customSize: "480px",
        })
      }
      className={cn("w-full @lg:w-auto", className)}
    >
      <PiArrowLineDownBold className="me-1.5 h-[17px] w-[17px]" />
      {buttonLabel}
    </Button>
  );
}
