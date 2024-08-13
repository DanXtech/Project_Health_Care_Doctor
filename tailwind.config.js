/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    screens: { lg: { min: "1280px" }, sm: { max: "800px" } },
    extend: {
      colors: {
        blue_gray: { 900: "#172048" },
        cyan: {
          300: "#56e0e0",
          800: "#04789d",
          900: "#02607e",
          "300_01": "#4ed6da",
          "300_02": "#4cd3d8",
          "300_03": "#50d9db",
          "300_04": "#50d8db",
          "800_01": "#04799d",
          "800_02": "#017399",
          "800_03": "#03779c",
          "800_04": "#007299",
          "800_19": "#00729919",
          "800_33": "#01739933",
          "800_63": "#00729963",
          "800_7f": "#02749a7f",
          "900_01": "#005b7b",
          "900_02": "#025f7d",
        },
        gray: {
          50: "#f4feff",
          400: "#c4c4c4",
          900: "#242527",
          "500_14": "#96969614",
        },
        indigo: { 50: "#e2eaf3" },
        teal: { 300: "#45bdbf" },
        white: { a700: "#ffffff" },
      },

      boxShadow: {
        xs: "0 10px 15px 0 #01739933",
        sm: "0 10px 15px 0 #96969614",
      },
      backgroundImage: {
        gradient: "linear-gradient(180deg, #4cd3d8, #03779c)",
        gradient1: "linear-gradient(126deg, #56e0e0, #007299)",
        gradient2: "linear-gradient(180deg, #50d8db, #04799d, #007299)",
        gradient3: "linear-gradient(99deg, #50d9db, #007299)",
        gradient4: "linear-gradient(99deg, #45bdbf, #005b7b)",
        gradient5: "linear-gradient(180deg, #4ed6da, #04789d)",
      },
      fontFamily: { poppins: "Poppns", dmsans: "DM Sans" },
    },
  },
  plugins: [],
};
