/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [require("daisyui"), require("flowbite/plugin")],

  daisyui: {
    themes: [
      {
        dark: {
          heading: "#9333ea",
          textcolor: "#ffffff",
          default: "#84e896",
          primary: "#4b5563",
          secondary: "#ef9ec6",
          accent: "#5e99c9",
          neutral: "#1f1e24",
          "base-100": "#2d3949",
          info: "#3ba0ed",
          success: "#1ba781",
          warning: "#f0a433",
          error: "#e62c28",
        },
      },
      {
        light: {
          heading: "#9333ea",
          textcolor: "#000000",
          default: "#b728ff",
          primary: "#d1d5db",
          secondary: "#ce0c56",
          accent: "#f4cf49",
          neutral: "#2b313b",
          "base-100": "#f1eff5",
          info: "#2488e5",
          success: "#4ade80",
          warning: "#f1c841",
          error: "#db2455",

          // primary: "#c1ecff",

          // secondary: "#014e82",

          // accent: "#2f22b7",

          // neutral: "#2a2c3c",

          // "base-100": "#ffffff",

          // info: "#4a65e8",

          // success: "#4ade80",

          // warning: "#f2a840",

          // error: "#f7363d",
        },
      },
      // "light",
    ], // true: all themes | false: only light + dark | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "dark", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    rtl: false, // rotate style direction from left-to-right to right-to-left. You also need to add dir="rtl" to your html tag and install `tailwindcss-flip` plugin for Tailwind CSS.
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
  },
};
