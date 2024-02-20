import type { StockInfoItemProps } from "./StockItem.types";

export const useStockItem = (props: StockInfoItemProps) => {
  const { ticker, companyName, tickerAccent, size = "md", ...otherProps } = props;

  return {
    ...otherProps,
    title: tickerAccent ? ticker : companyName,
    subtitle: !tickerAccent ? ticker : companyName,
    size,
    tickerAccent,
    stockChangeLabelSize: size === "md" ? ("s" as const) : ("m" as const),
    stockPriceSize: size === "md" ? ("headline3" as const) : ("headline2" as const),
  };
};
