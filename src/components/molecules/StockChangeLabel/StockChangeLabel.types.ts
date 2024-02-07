import type { LabelProps } from "@atoms/Label";

export type StockChangeLabelProps = { change: number; changePercentage: number } & Omit<
  LabelProps,
  "children"
>;
