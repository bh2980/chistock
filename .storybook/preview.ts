import { withThemeByClassName } from "@storybook/addon-styling";
import type { Preview } from "@storybook/react";

import "../src/app/globals.css";
import "./storybook.css";

const preview: Preview = {
  parameters: {
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
