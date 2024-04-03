const {nextui} = require("@nextui-org/react");
export default {
  content: [
     "./index.html",
     "./src/**/*.{js,ts,jsx,tsx}",
     "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
     
  ],
  theme: {
     extend: {
       keyframes: {
         scroll: {
           to: {
             transform: "translate(calc(-50% - 0.5rem))",
           },
         },
       },
       animation: {
         scroll: "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
       },
     },
  },
  darkMode: "class",
  plugins: [nextui()],
};