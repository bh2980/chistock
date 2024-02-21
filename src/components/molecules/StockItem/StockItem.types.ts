export type StockItemProps = {
  src?: string;
  companyName: string;
  ticker: string;
  market?: string;
  currentPrice: number;
  change: number;
  changePercentage: number;
  tickerAccent?: boolean;
  size?: "md" | "lg";
};
