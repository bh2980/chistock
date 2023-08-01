/** @type {import('tailwindcss').Config} */
import color from "./src/constants/colorPalette";

import { createThemes } from "tw-colors";

module.exports = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      xs: ["12rem", "16rem"],
      s: ["14rem", "16rem"],
      m: ["16rem", "24rem"],
      l: ["20rem", "24rem"],
      xl: ["24rem", "32rem"],
      "2xl": ["36rem", "40rem"],
    },
    fontWeight: {
      regular: "400",
      bold: "700",
    },
    spacing: {
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
      xs: "0 0 24rem 0 rgba(18, 18, 18, 0.05)",
      s: "0 0 24rem 0 rgba(18, 18, 18, 0.25)",
      m: "0 0 24rem 0 rgba(18, 18, 18, 0.45)",
      l: "0 0 24rem 0 rgba(18, 18, 18, 0.65)",
      xl: "0 0 24rem 0 rgba(18, 18, 18, 0.85)",
    },
    borderWidth: {
      DEFAULT: "1rem",
      s: "1rem",
      m: "3rem",
    },
    colors: {
      transparent: color.transparent,
    },
    extend: {
      width: {
        "desktop-4": "336rem",
        "desktop-8": "688rem",
        "desktop-12": "1040rem",
      },
    },
  },
  plugins: [
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
            variant: color.neutral[20],
          },
        },
        outline: {
          DEFAULT: color.neutral[20],
          variant: color.neutral[80],
        },
        red: {
          DEFAULT: color.red[50],
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
            variant: color.neutral[60],
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
};
