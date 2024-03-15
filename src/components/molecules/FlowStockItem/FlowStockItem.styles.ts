import { tv } from "@utils/customTV";

export const FlowStockItemVariants = tv({
  slots: {
    root: "flex gap-l text-surface-on text-body1",
    changePercentageText: "",
  },
  variants: {
    numType: {
      POSITIVE: { changePercentageText: "text-error" },
      NEGATIVE: { changePercentageText: "text-primary" },
      ZERO: { changePercentageText: "" },
    },
  },
});
