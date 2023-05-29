/** @type {import('tailwindcss').Config} */
module.exports = {
 content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],   theme: {
    extend: {
      colors: {
        'oren-seblak': '#d33f01',
        'oren-skuy' : '#d33f01'
      },
    },
    fontSize: {
      sm: '14px', // body text
      md: '18px', //subjudul mobile
      xl: '21px', // judul mobile
      '2xl': '30px', //Judul
      '3xl': '35px', //subjudul
      '4xl': '6em', //Big
      '5xl': '3.052rem',
    }
  },
  plugins: [require("daisyui")],}

