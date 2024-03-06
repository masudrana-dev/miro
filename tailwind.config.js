// const withMT = require("@material-tailwind/html/utils/withMT");


// /** @type {import('tailwindcss').Config} */
// module.exports = withMT({
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       maxWidth: {
//         "container": "1440px",
//       },
//       fontFamily: {
//         "inter": ["Inter , sans-serif"]
//       }
//     },
//   },
//   plugins: [],
// })
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        "container": "1440px",
      },
      fontFamily: {
        "inter": ["Inter , sans-serif"]
      },
      // content:{
      //   "display" : "block"

      // }
    },
  },
  plugins: [],
}