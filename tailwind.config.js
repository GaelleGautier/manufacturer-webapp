/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        menutxt: "#FF0000",
        adtxtnormal: "#363447",
        adtxtwhite: "#FFFFFF",
        adtxtlight: "#60626C",
        adbgdark: "#363447",
        adbgdarkalt: "#6c6a7a",
        adbglight: "#F2F2F1",
        adbgwhite: "#FFFFFF",
        adbgborder: "#A3AAB9",
        adbgselected: "#FF954F",
        aderror: "#FF6949",
        adwarning: "#E5AE5A",
        adsuccess: "#81D47F",
      },
    },
    boxShadow: {
      adtable: "0 0 0 1px var(--nd-bloc-stroke, #a3aab9)",
    },
  },
  plugins: [],
};
