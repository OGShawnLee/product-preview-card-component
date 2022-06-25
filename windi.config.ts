import { defineConfig } from "vite-plugin-windicss";

export default defineConfig({
  theme: {
    colors: {
      cream: "hsl(30, 38%, 92%)",
      viridian: "hsl(158, 36%, 37%)",
      "viridian-dark": "hsl(158, 50%, 15%)",
      "blue-dark": "hsl(212, 21%, 14%)",
      "blue-grayish": "hsl(228, 12%, 48%)",
      white: "hsl(0, 0%, 100%)",
    },
    fontFamily: {
      montserrat: ["Montserrat", "sans-serif"],
      fraunces: ["Fraunces", "sans-serif"],
    },
  },
});
