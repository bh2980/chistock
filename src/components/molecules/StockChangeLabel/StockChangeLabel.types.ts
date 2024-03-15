import type { LabelProps } from "@atoms/Label";

export type StockChangeLabelProps = { changePercentage: number } & Omit<LabelProps, "children">;
