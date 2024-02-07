import { useEffect, useState } from "react";

import Label, { LabelProps } from "@atoms/Label";

type StockChangeLabelProps = { change: number; changePercentage: number } & Omit<
  LabelProps,
  "children"
>;

const StockChangeLabel = ({ change, changePercentage, ...labelProps }: StockChangeLabelProps) => {
  const isPositive = change > 0;
  const labelVariant = isPositive ? "error" : "primary";

  const [content, setContent] = useState<string | number>(change);
  const [showPercentage, setShowPercentage] = useState(false);

  useEffect(() => {
    setContent(showPercentage ? `${changePercentage}%` : change);
  }, [showPercentage, changePercentage, change]);

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
        <div>{changePercentage}%</div>
      </div>
    </Label>
  );
};

export default StockChangeLabel;
