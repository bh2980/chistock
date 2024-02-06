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
  const labelVariant = isPositive ? "primary" : "error";

  const [content, setContent] = useState(change);
  const [isPercentage, setIsPercentage] = useState(false);

  useEffect(() => {
    setContent(isPercentage ? changePercentage : change);
  }, [isPercentage, changePercentage, change]);

  useEffect(() => {
    const intervalId = setInterval(
      (resolve) => resolve(setIsPercentage((current) => !current)),
      5000
    );

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <Label variant={labelVariant} {...labelProps}>
      <div className="animate-fadeInOut text-center">{content}</div>
      <div className="flex flex-col invisible">
        <div>{change}</div>
        <div>{changePercentage}</div>
      </div>
    </Label>
  );
};

export default StockChangeLabel;
