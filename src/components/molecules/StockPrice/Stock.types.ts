import type { VariantProps } from "tailwind-variants";

import { stockPriceVariants } from "./StockPrice.styles";

export type StockPriceProps = {
  price: number;
  prefix?: string;
  postfix?: string;
  decimalPoint?: number;
} & VariantProps<typeof stockPriceVariants>;
