import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";
import { createThemes } from "tw-colors";

import color from "./src/constants/colorPalette";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    fontSize: {
      xs: ["12rem", "20rem"],
      s: ["14rem", "20rem"],
      m: ["16rem", "24rem"],
      l: ["20rem", "32rem"],
      xl: ["24rem", "36rem"],
      "2xl": ["32rem", "48rem"],
    },
    fontWeight: {
      regular: "400",
      bold: "700",
    },
    spacing: {
      0: "0rem",
      "3xs": "2rem",
      "2xs": "4rem",
      xs: "8rem",
      s: "12rem",
      m: "16rem",
      l: "20rem",
      xl: "24rem",
      "2xl": "32rem",
      "3xl": "40rem",
    },
    borderRadius: {
      none: "0rem",
      xs: "2rem",
      s: "4rem",
      m: "8rem",
      l: "16rem",
      circle: "9999rem",
    },
    boxShadow: {
      none: "",
      xs: "0rem 2rem 2rem 0rem rgba(10, 14, 21, 0.25)",
      s: "0rem 4rem 4rem 0rem rgba(10, 14, 21, 0.25)",
      m: "0rem 8rem 8rem 0rem rgba(10, 14, 21, 0.25)",
      l: "0rem 12rem 12rem 0rem rgba(10, 14, 21, 0.25)",
      xl: "0rem 16rem 16rem 0rem rgba(10, 14, 21, 0.25)",
    },
    borderWidth: {
      DEFAULT: "1rem",
      s: "1rem",
      m: "3rem",
    },
    colors: {
      inherit: "inherit",
      current: "currentColor",
      transparent: "transparent",
    },
    extend: {
      fontSize: {
        sizeInherit: "1em",
      },
      width: {
        "desktop-4": "336rem",
        "desktop-8": "688rem",
        "desktop-12": "1040rem",
      },
    },
  },
  plugins: [
    plugin(({ addVariant }) => {
      // //InteractionState
      addVariant("interaction", "& .interactionState");
      addVariant("interactionHover", "&:hover .interactionState");
      addVariant("interactionFocus", "&:focus-within .interactionState");
      addVariant("interactionFocusVisible", "&:focus-visible .interactionState");
      addVariant("interactionPress", "&:active .interactionState");
      // hover보다 press가 뒤에 있어야 함. -> CSS 파일 내에서 뒤에 나오는 규칙이 우선 적용
    }),
    //Color - State - Background/Content
    createThemes({
      light: {
        primary: {
          DEFAULT: color.blue[50],
          on: color.white,
          fixed: {
            DEFAULT: color.blue[50],
            on: color.white,
          },
        },
        secondary: {
          DEFAULT: color.blue[20],
          on: color.white,
          fixed: {
            DEFAULT: color.blue[20],
            on: color.white,
          },
        },
        tertiary: {
          DEFAULT: color.blue[70],
          on: color.blue[10],
          fixed: {
            DEFAULT: color.blue[70],
            on: color.blue[10],
          },
        },
        surface: {
          DEFAULT: color.neutral[90],
          variant: {
            DEFAULT: color.white,
            high: color.neutral[80],
            highest: color.neutral[70],
          },
          on: {
            DEFAULT: color.neutral[0],
            variant: color.neutral[30],
          },
        },
        outline: {
          DEFAULT: color.neutral[40],
          variant: color.neutral[80],
        },
        red: {
          DEFAULT: color.red[40],
          on: color.white,
          variant: {
            DEFAULT: color.red[30],
            on: color.white,
          },
        },
        yellow: {
          DEFAULT: color.yellow[50],
          on: color.neutral[0],
        },
        green: {
          DEFAULT: color.green[50],
          on: color.neutral[0],
        },
        magenta: {
          DEFAULT: color.magenta[50],
          on: color.neutral[0],
        },
      },
      dark: {
        primary: {
          DEFAULT: color.blue[60],
          on: color.neutral[0],
          fixed: {
            DEFAULT: color.blue[50],
            on: color.white,
          },
        },
        secondary: {
          DEFAULT: color.blue[80],
          on: color.neutral[10],
          fixed: {
            DEFAULT: color.blue[20],
            on: color.white,
          },
        },
        tertiary: {
          DEFAULT: color.blue[10],
          on: color.blue[90],
          fixed: {
            DEFAULT: color.blue[70],
            on: color.blue[10],
          },
        },
        surface: {
          DEFAULT: color.blue[5],
          variant: {
            DEFAULT: color.neutral[10],
            high: color.neutral[20],
            highest: color.neutral[30],
          },
          on: {
            DEFAULT: color.white,
            variant: color.neutral[70],
          },
        },
        outline: {
          DEFAULT: color.neutral[60],
          variant: color.neutral[20],
        },
        red: {
          DEFAULT: color.red[60],
          on: color.neutral[0],
          variant: {
            DEFAULT: color.red[80],
            on: color.neutral[0],
          },
        },
        yellow: {
          DEFAULT: color.yellow[60],
          on: color.neutral[0],
        },
        green: {
          DEFAULT: color.green[40],
          on: color.neutral[0],
        },
        magenta: {
          DEFAULT: color.magenta[60],
          on: color.neutral[0],
        },
      },
    }),
  ],
} satisfies Config;
