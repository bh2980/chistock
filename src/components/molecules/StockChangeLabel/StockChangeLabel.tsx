import { useEffect, useState } from "react";

import Label from "@atoms/Label";

import { type StockChangeLabelProps } from "./StockChangeLabel.types";

enum NumType {
  POSITIVE,
  ZERO,
  NEGATIVE,
}

const StockChangeLabel = ({ change, changePercentage, ...labelProps }: StockChangeLabelProps) => {
  const numType = change > 0 ? NumType.POSITIVE : change === 0 ? NumType.ZERO : NumType.NEGATIVE;
  const plusPrefix = numType === NumType.POSITIVE ? "+" : "";

  const labelVariant =
    numType === NumType.POSITIVE ? "error" : numType === NumType.ZERO ? "secondary" : "primary";

  const makeContent = () => {
    if (showPercentage) {
      return `${plusPrefix}${changePercentage.toFixed(1)}%`;
    }

    return numType === NumType.ZERO ? "-" : `${plusPrefix}${change.toLocaleString()}`;
  };

  const [showPercentage, setShowPercentage] = useState(true);
  const [content, setContent] = useState<string | number>(makeContent());

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
        <div>{`${plusPrefix}${change.toLocaleString()}`}</div>
        <div>{`${plusPrefix}${changePercentage.toFixed(1)}%`}</div>
      </div>
    </Label>
  );
};

export default StockChangeLabel;
