export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
      colors: {
        Error : "#EB3F5E",
        Grayscale70: "#78828A",
       LineDark: "#29282F",
        warning: "#FFCD1A",
        Grayscale100: "#171725", 
        mainDark: "#0D0C0F",
        dark: '#333333',
        darkText: '#ffffff',
        Grayscale60: "#9CA4AB",
        Grayscale10: "#F9F9F9",
       
        Primary: "#B43FEB",
        Line: "#E9EBED",
        DarkSmooth: "#1A161F",
        Label: "#B43FEB",
        Grayscale40: "D1D8DD",
        alert: "#FFCD1A",
      },
      fontSize: {
        32: "32px",
        48: "48px",
        24: "24px",
        56: "56px",
        20: "20px",
        18: "18px",
        16: "16px",
        14: "14px",
        12: "12px"
      },
      
    },
  },

  plugins: [],
};
