import { tv } from "@utils/customTV";

import { tileVariants } from "../Tile";

export const expandTileVariants = tv({
  extend: tileVariants,
  base: "flex flex-col gap-s transition-[max-height]",
  variants: {
    padding: {
      none: "",
      "3xs": "px-3xs pt-3xs pb-[1rem]",
      "2xs": "px-2xs pt-2xs pb-3xs",
      xs: "px-xs pt-xs pb-2xs",
      s: "px-s pt-s pb-[6rem]",
      m: "px-m pt-m pb-xs",
      l: "px-l pt-l pb-[10rem]",
      xl: "px-xl pt-xl pb-s",
      "2xl": "px-2xl pt-2xl pb-m",
      "3xl": "px-3xl pt-3xl pb-l",
    },
    isExpand: {
      true: "!max-h-screen",
    },
  },
  defaultVariants: {
    padding: "2xl",
  },
});
