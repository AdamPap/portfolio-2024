import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      gridTemplateRows: {
        "16": "repeat(16, minmax(0, 1fr))",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        crimson: "#E32636",
        lightGray: "#ECECEC",
        darkGray: "#727272",
        gridLines: "#DEDEDE",
        gridLinesDark: "#303030",
        bgDark: "#202020",
        black: "#000000",
        white: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
export default config;
