/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  
  ],
  darkMode:"class",
  theme: {
    extend: {
      colors:{
        primary:"#39DB4A",
      secondary:"#39DB4b",
      special:"#FF6868",
      textcolor:"#90BD95",
      iconcolor:"#EDFFEF",
      facebookcolor:"#1975F4",
      twittercolor:"#1B9FF1",
      youtubecolor:"#FE0000"

    }
    },
    container:{
      center:true,
      padding:{
        DEFAULT:"1rem",
        sm:"3rem"
      }
    },
  },
  plugins: [],
}