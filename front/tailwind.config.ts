import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lato: ["var(--font-lato)"], // usa a variável da fonte
      },
    },
  },
  plugins: [],
};
export default config;
