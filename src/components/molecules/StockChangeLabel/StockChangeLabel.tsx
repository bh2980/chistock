import { getFormatNumber } from "@utils/getFormatNumber";

import Label from "@atoms/Label";

import type { StockChangeLabelProps } from "./StockChangeLabel.types";

const StockChangeLabel = ({ changePercentage, ...labelProps }: StockChangeLabelProps) => {
  const labelVariant =
    changePercentage > 0
      ? ("error" as const)
      : changePercentage === 0
      ? ("secondary" as const)
      : ("primary" as const);

  const prefix = changePercentage > 0 ? "+" : "";

  return (
    <Label variant={labelVariant} {...labelProps}>
      {getFormatNumber({ number: changePercentage, decimalPoint: 1, prefix, postfix: "%" })}
    </Label>
  );
};

export default StockChangeLabel;
