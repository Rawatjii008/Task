/** @type {import('tailwindcss').Config} */

const themes = {
  colors: {
    primary: "#164e63",
    secondary: "#083344",
    activetabs: "#0891b2",
    tablist : "#0e7490",

  
  },
};
export const content = [
  "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
];
export const theme = {
  extend: {
    colors: {
      primary: themes.colors.primary,
      secondary: themes.colors.secondary,
      activetabs: themes.colors.activetabs,
      tablist: themes.colors.tablist,
      // add more custom colors here
    },
    backgroundImage: {
      "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      "gradient-conic":
        "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
    },
  },
};
export const plugins = [];
