module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true
  },
  purge: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}"
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem"
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#fff",
      red: "#EB1700",
      secondary: "#272425",
      primary: "#e75810",
      yellow: "#F2BC00",
      orange: "#ff6800",
      black: "#212121",
      whitemilk: "#E0E2E8",
      oke: "#021f2d",
      // green: "#098A22",
      // Mustard: "#f3ca20",
      // Grey: "#5d6d7c",
      DarkSlate: "#1d1e22",
      // DarkBlue: "#12232E",

      blue1: "#0D384B",
      gray: {
        100: "#F3F4F6",
        200: "#E5E7EB",
        300: "#D1D5DB",
        400: "#9CA3AF",
        500: "#6B7280",
        // 700: "#374151",
        800: "#1F2937",
        900: "#111827"
      }
    },

    darkSelector: ".dark-mode",

    fontFamily: {
      sans: ["Poppins", "sans-serif"]
    },

    extend: {}
  },
  variants: {
    backgroundColor: [
      "dark",
      "dark-hover",
      "dark-group-hover",
      "dark-even",
      "dark-odd",
      "hover",
      "responsive"
    ],
    borderColor: [
      "dark",
      "dark-focus",
      "dark-focus-within",
      "hover",
      "responsive"
    ],
    textColor: ["dark", "dark-hover", "dark-active", "hover", "responsive"]
  },
  plugins: [require("tailwindcss-dark-mode")()]
};
