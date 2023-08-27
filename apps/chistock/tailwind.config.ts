import type { Config } from "tailwindcss";

import tailwindConfig from "../../tailwind.config";

export default {
  ...tailwindConfig,
  content: ["./src/**/*.{js,jsx,ts,tsx,mdx}"],
} satisfies Config;
