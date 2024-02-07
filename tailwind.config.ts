import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";
import { createThemes } from "tw-colors";

import color from "./src/constants/colorPalette";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    screens: {
      tablet: "600px",
      desktop: "1280px",
    },
    fontSize: {
      xs: ["10.67rem", "16rem"],
      s: ["13.33rem", "20rem"],
      m: ["16rem", "24rem"],
      l: ["18.67rem", "28rem"],
      xl: ["21.33rem", "32rem"],
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
      ambient: "0rem 0rem 16rem 0rem rgba(0, 0, 0, 0.12)",
      floating: "0rem 16rem 16rem 0rem rgba(0, 0, 0, 0.25)",
    },
    colors: {
      inherit: "inherit",
      current: "currentColor",
      transparent: "transparent",
      white: color.neutral[100],
      black: color.neutral[0],
    },
    extend: {
      opacity: { hocus: ".1", disabled: ".2", press: ".2" },
      fontSize: {
        sizeInherit: "1em",
      },
      animation: {
        fadeInOut: "fadeInOut 5s ease-in-out infinite",
      },
      keyframes: {
        fadeInOut: {
          "0%": { opacity: "0", transform: "translateY(100%)" },
          "10%": { opacity: "1", transform: "translateY(0)" },
          "90%": { opacity: "1", transform: "translateY(0)" },
          "100%": { opacity: "0", transform: "translateY(-100%)" },
        },
      },
    },
  },
  plugins: [
    plugin(({ addVariant }) => {
      // //InteractionState
      addVariant("interaction", "& .interactionState");
      addVariant("interactionFocus", "&:focus-within .interactionState");
      addVariant("interactionFocusVisible", "&:focus-visible .interactionState");
      addVariant("interactionHover", "&:hover .interactionState");
      addVariant("interactionPress", "&:active .interactionState");
      // hover보다 press가 뒤에 있어야 함. -> CSS 파일 내에서 뒤에 나오는 규칙이 우선 적용
    }),
    //Color - State - Background/Content
    createThemes({
      light: {
        primary: {
          DEFAULT: color.primary[40],
          on: color.primary[100],
          container: {
            DEFAULT: color.primary[80],
            on: color.primary[10],
          },
        },
        secondary: {
          DEFAULT: color.secondary[20],
          on: color.secondary[100],
          container: {
            DEFAULT: color.secondary[90],
            on: color.secondary[10],
          },
        },
        error: {
          DEFAULT: color.error[40],
          on: color.error[100],
          container: {
            DEFAULT: color.error[90],
            on: color.error[10],
          },
        },
        surface: {
          DEFAULT: color.neutral[97],
          container: {
            DEFAULT: color.neutral[100],
            high: color.neutral[95],
            highest: color.neutral[92],
          },
          on: {
            DEFAULT: color.neutral[15],
            variant: color.neutral[30],
          },
        },
        outline: {
          DEFAULT: color.neutral[40],
          variant: color.neutral[80],
        },
      },
      dark: {
        primary: {
          DEFAULT: color.primary[70],
          on: color.primary[0],
          container: {
            DEFAULT: color.primary[30],
            on: color.primary[90],
          },
        },
        secondary: {
          DEFAULT: color.secondary[80],
          on: color.secondary[0],
          container: {
            DEFAULT: color.secondary[40],
            on: color.secondary[90],
          },
        },
        error: {
          DEFAULT: color.error[70],
          on: color.error[0],
          container: {
            DEFAULT: color.error[20],
            on: color.error[90],
          },
        },
        surface: {
          DEFAULT: color.neutral[10],
          container: {
            DEFAULT: color.neutral[17],
            high: color.neutral[20],
            highest: color.neutral[23],
          },
          on: {
            DEFAULT: color.neutral[100],
            variant: color.neutral[80],
          },
        },
        outline: {
          DEFAULT: color.neutral[70],
          variant: color.neutral[30],
        },
      },
    }),
  ],
} satisfies Config;
