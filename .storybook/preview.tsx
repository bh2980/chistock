import { withThemeByClassName } from "@storybook/addon-styling";
import type { Preview } from "@storybook/react";
import React from "react";

import "../src/app/globals.css";
import StorybookTemplate from "./StorybookTemplate";
import "./storybook.css";

const preview: Preview = {
  parameters: {
    viewport: {
      viewports: {
        mobile: {
          name: "mobile",
          styles: {
            width: "480px",
            height: "100%",
          },
        },
        tablet: {
          name: "tablet",
          styles: {
            width: "600px",
            height: "100%",
          },
        },
        desktop: {
          name: "desktop",
          styles: {
            width: "1280px",
            height: "100%",
          },
        },
      },
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    options: {
      storySort: { order: ["Token", "Atom"] },
    },
    docs: {
      page: StorybookTemplate,
      autodocs: "tag",
    },
  },
  decorators: [
    //@ts-ignore
    withThemeByClassName({
      themes: {
        light: "theme-light",
        dark: "theme-dark",
      },
      defaultTheme: "light",
    }),
  ],
};

export default preview;
