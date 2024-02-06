import { useEffect, useState } from "react";

import Label, { LabelProps } from "@atoms/Label";

type StockChangeLabelProps = { change: number; changePercentage: number } & Omit<
  LabelProps,
  "children"
>;

// 증감률이 +면 파랑 -면 빨강을 보여준다
// 증감값과 증감률을 번갈아가며 보여준다.
const StockChangeLabel = ({ change, changePercentage, ...labelProps }: StockChangeLabelProps) => {
  const isPositive = change > 0;
  const labelVariant = isPositive ? "error" : "primary";

  const [content, setContent] = useState(change);
  const [showPercentage, setShowPercentage] = useState(false);

  useEffect(() => {
    setContent(showPercentage ? changePercentage : change);
  }, [showPercentage, changePercentage, change]);

  useEffect(() => {
    const intervalId = setInterval(
      (resolve) => resolve(setShowPercentage((current) => !current)),
      5000
    );

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <Label variant={labelVariant} className="overflow-hidden" {...labelProps}>
      <div className="animate-fadeInOut text-center">{`${isPositive ? "▲" : "▼"} ${content}${
        showPercentage ? "%" : ""
      }`}</div>
      <div className="flex flex-col invisible">
        <div>▲ {change}</div>
        <div>▲ {changePercentage} %</div>
      </div>
    </Label>
  );
};

export default StockChangeLabel;
