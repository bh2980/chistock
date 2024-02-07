import { useEffect, useState } from "react";

import Label from "@atoms/Label";

import { type StockChangeLabelProps } from "./StockChangeLabel.types";

const StockChangeLabel = ({ change, changePercentage, ...labelProps }: StockChangeLabelProps) => {
  const [showPercentage, setShowPercentage] = useState(true);
  const [content, setContent] = useState("");

  enum NumType {
    POSITIVE,
    ZERO,
    NEGATIVE,
  }

  const numType = change > 0 ? NumType.POSITIVE : change === 0 ? NumType.ZERO : NumType.NEGATIVE;
  const plusPrefix = numType === NumType.POSITIVE ? "+" : "";

  const labelVariant =
    numType === NumType.POSITIVE ? "error" : numType === NumType.ZERO ? "secondary" : "primary";

  const makeChangePercentageString = () => {
    return `${plusPrefix}${changePercentage.toFixed(1)}%`;
  };

  const makeChangeString = () => {
    return numType === NumType.ZERO ? "-" : `${plusPrefix}${change.toLocaleString()}`;
  };

  useEffect(() => {
    setContent(showPercentage ? makeChangePercentageString() : makeChangeString());
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
        <div>{makeChangeString()}</div>
        <div>{makeChangePercentageString()}</div>
      </div>
    </Label>
  );
};

export default StockChangeLabel;
