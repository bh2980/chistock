import Label from "@atoms/Label";

import type { StockChangeLabelProps } from "./StockChangeLabel.types";
import { useStockChangeLabel } from "./useStockChangeLabel";

const StockChangeLabel = ({ change, changePercentage, ...labelProps }: StockChangeLabelProps) => {
  const { labelVariant, content, makeChangeString, makeChangePercentageString } =
    useStockChangeLabel({ change, changePercentage });

  return (
    <Label variant={labelVariant} className="overflow-hidden" {...labelProps}>
      <div className="animate-fadeInOut text-center">{content}</div>
      <div className="flex flex-col invisible">
        <div>{makeChangeString()}</div>
        <div>{makeChangePercentageString()}</div>
      </div>
    </Label>
  );
};

export default StockChangeLabel;
