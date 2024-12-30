import { Controller, useFormContext, useWatch } from "react-hook-form";
import { Checkbox, Radio, RadioGroup } from "rizzui";
import cn from "../../../../../utils/class-names";

interface DifferentBillingAddressProps {
  className?: string;
}

export default function DifferentBillingAddress({
  className,
}: DifferentBillingAddressProps) {
  const { control } = useFormContext();

  const sameShippingAddress = useWatch({
    control,
    name: "sameShippingAddress",
  });

  return (
    <Controller
      name="sameShippingAddress"
      control={control}
      render={({ field: { value, onChange } }) => (
        <Checkbox
          value={value}
          defaultChecked={value}
          onChange={onChange}
          label="Shipping Address is the same as Billing Address"
        />
      )}
    />
  );
}
