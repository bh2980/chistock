import { tv } from "@utils/customTV";

export const stockItemVariants = tv({
  slots: {
    root: "flex w-full justify-between",
    stockInfoContainer: "flex gap-m",
    stockPriceContainer: "flex flex-col items-end",
    stockTextContainer: "flex flex-col",
    subtitleContainer: "flex",
    stockLogo: "rounded-circle",
    stockPriceSize: "",
    StockChangeLabelSize: "",
    titleText: "font-bold",
    subtitleText: "",
    marketText: "text-surface-on-variant",
    tickerMarketDivider: "my-2xs",
  },
  variants: {
    tickerAccent: { true: "" },
    size: {
      md: {
        subtitleContainer: "gap-xs",
        stockLogo: "w-[48rem] h-[48rem]",
        titleText: "text-headline3",
        subtitleText: "text-body2",
        marketText: "text-body2",
      },
      lg: {
        subtitleContainer: "gap-s",
        stockLogo: "w-[56rem] h-[56rem]",
        titleText: "text-headline2",
        subtitleText: "text-body1",
        marketText: "text-body1",
      },
    },
  },
  compoundVariants: [
    {
      tickerAccent: true,
      className: {
        subtitleText: "text-surface-on-variant",
      },
    },
    {
      tickerAccent: false,
      className: {
        subtitleText: "font-bold text-primary",
      },
    },
  ],
  defaultVariants: {
    tickerAccent: false,
    size: "md",
  },
});
