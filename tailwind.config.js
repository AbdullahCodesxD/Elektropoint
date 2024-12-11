/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/**.{jsx,js}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        custom: "2fr 1fr",
        product: "150px 100px 100px 100px 100px",
        table: "120px 200px 100px 200px",
        // search: "auto 200px",
      },
      backgroundPosition: {
        mob: "5% center !important",
      },
      screens: {
        vsm: "360px",
        msm: { raw: "(min-width : 465px) and (max-width:640px)" },
        med: "858px",

        customQuery: { raw: "(max-height: 670px) and (min-width:858px)" },
      },
      colors: {
        main: "#99D913",
        // main: "green",
        blue: "#27348B",
        lightBlue: "#009EE3",
        red: "#B31319",
        dark: "#000000",
        lightDark: "#1E1E1E",
        lightGray: "#727272",
        barColor: "#D9D9D9",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
