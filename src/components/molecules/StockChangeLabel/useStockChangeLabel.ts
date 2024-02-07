import { useEffect, useState } from "react";

export const useStockChangeLabel = ({
  change,
  changePercentage,
}: {
  change: number;
  changePercentage: number;
}) => {
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
    numType === NumType.POSITIVE
      ? ("error" as const)
      : numType === NumType.ZERO
      ? ("secondary" as const)
      : ("primary" as const);

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

  return {
    labelVariant,
    content,
    makeChangePercentageString,
    makeChangeString,
  };
};
