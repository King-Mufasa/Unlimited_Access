module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        app: {
          primary: {
            DEFAULT: "#7F56D9",
            700: "#6941C6",
            500: "#9E77ED",
            400: "#B692F6",
            300: "#D6BBFB",
            200: "#E9D7FE",
            50: "#F9F5FF"
          },
          gray: {
            50: "#F9FAFB",
            100: "#F2F4F7",
            200: "#E4E7EC",
            300: "#D0D5DD",
            400: "#98A2B3",
            500: "#667085",
            600: "#475467",
            700: "#344054",
            800: "#1D2939",
            900: "#101828"
          },
          red: {
            300: "#FDA29B",
            500: "#FC7268",
            700: "#B42318"
          },
          green: {
            100: "#D1FADF",
            700: "#027A48"
          },
          blue: {
            DEFAULT: "#0F56B3"
          }
        }
      },
      spacing: {
        2.5: "10px",
        3.5: "14px",
        4.5: "18px",
        18: "72px"
      },
      borderRadius: {
        'half': '120px',
        '4xl': "50px"
      },
      aspectRatio: {
        '3/4': '3 / 4',
        '5/1': '5 / 1'
      },
    },
  },
  plugins: [],
}
