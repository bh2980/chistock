import { useEffect, useState } from "react";

import Label from "@atoms/Label";

import { type StockChangeLabelProps } from "./StockChangeLabel.types";

enum NumType {
  POSITIVE,
  ZERO,
  NEGATIVE,
}

const StockChangeLabel = ({ change, changePercentage, ...labelProps }: StockChangeLabelProps) => {
  const [content, setContent] = useState<string | number>(changePercentage);
  const [showPercentage, setShowPercentage] = useState(true);

  const numType = change > 0 ? NumType.POSITIVE : change === 0 ? NumType.ZERO : NumType.NEGATIVE;

  const labelVariant =
    numType === NumType.POSITIVE ? "error" : numType === NumType.ZERO ? "secondary" : "primary";

  const makeContent = () => {
    if (showPercentage) {
      return `${changePercentage.toFixed(1)}%`;
    }

    return numType === NumType.ZERO ? "-" : change;
  };

  useEffect(() => {
    setContent(makeContent());
  }, [showPercentage, numType, change, changePercentage]);

  useEffect(() => {
    const intervalId = setInterval(() => setShowPercentage((current) => !current), 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <Label variant={labelVariant} className="overflow-hidden" {...labelProps}>
      <div className="animate-fadeInOut text-center">{content}</div>
      <div className="flex flex-col invisible">
        <div>{change}</div>
        <div>{changePercentage.toFixed(1)}%</div>
      </div>
    </Label>
  );
};

export default StockChangeLabel;
