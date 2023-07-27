/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    fontSize: {
      xs: ["12rem", "16rem"],
      s: ["14rem", "16rem"],
      m: ["16rem", "24rem"],
      l: ["20rem", "24rem"],
      xl: ["24rem", "32rem"],
      "2xl": ["36rem", "40rem"],
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
      xs: "4rem",
      m: "8rem",
      l: "16rem",
      circle: "50%",
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
      white: "#F9F9FB",
      black: "#121212",
      transparent: "rgba(0,0,0,0)",
      blue: {
        DEFAULT: "#1A8FFF", //400
        light: "#80C1FF", //200
        dark: "#005CB3", //600
        50: "#E5F3FF",
        100: "#B2DAFF",
        200: "#80C1FF",
        300: "#4DA8FF",
        400: "#1A8FFF",
        500: "#0076E5",
        600: "#005CB3",
        700: "#004280",
        800: "#00274D",
        900: "#000D1A",
      },
      red: {
        DEFAULT: "#FF1A1D", //400
        light: "#FF4D4F", //300
        dark: "#800002", //700
        50: "#FFE5E6",
        100: "#FFB2B4",
        200: "#FF8082",
        300: "#FF4D4F",
        400: "#FF1A1D",
        500: "#E50004",
        600: "#B20003",
        700: "#800002",
        800: "#4D0001",
        900: "#1A0000",
      },
      yellow: {
        DEFAULT: "#FFC14D", //300
        50: "#FFF6E5",
        100: "#FFE4B2",
        200: "#FFD280",
        300: "#FFC14D",
        400: "#FFAF1A",
        500: "#E59500",
        600: "#B27400",
        700: "#805300",
        800: "#4D3200",
        900: "#1A1100",
      },
      gray: {
        50: "#F2F5F9",
        100: "#CED9E8",
        200: "#ABBFD8",
        300: "#88A4C8",
        400: "#6589B8",
        500: "#4A6FA1",
        600: "#3A577E",
        700: "#2A3F5B",
        800: "#1A2738",
        900: "#0A0E15",
      },
      green: {
        DEFAULT: "#00E56F", //500
        50: "#E5FFF2",
        100: "#B2FFD7",
        200: "#80FFBD",
        300: "#4DFFA3",
        400: "#1AFF88",
        500: "#00E56F",
        600: "#00B256",
        700: "#00803E",
        800: "#004D25",
        900: "#001A0C",
      },

      pink: {
        DEFAULT: "#FF1A90", //400
        50: "#FFE5F3",
        100: "#FFB2DA",
        200: "#FF80C1",
        300: "#FF4DA9",
        400: "#FF1A90",
        500: "#E50077",
        600: "#B2005C",
        700: "#800042",
        800: "#4D0028",
        900: "#1A000D",
      },
    },
    extend: {
      width: {
        "desktop-4": "336rem",
        "desktop-8": "688rem",
        "desktop-12": "1040rem",
      },
    },
  },

  plugins: [],
};
