export default {
  content: [
    "./src/**/*.{html,js}",
    "./src/index.html",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0175C2',
        secondary: '#FF6B6B',
        accent: '#FFC107',
      },
      fontFamily: {
        display: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
