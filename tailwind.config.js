module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto'],
      },
      fontSize: {
        tiny: '.60rem',
      },
      colors: {
        'blue-base': '#24323F',
        'almost-white': '#F5F5F5',
      },
      boxShadow: {
        'white-light': '5px 5px 10px 3px rgba(255, 255, 255, 0.3)',
      },
      fontFamily: {
        inter: ['Inter, sans-serif'],
      },
      height: {
        header: '6rem',
        body: 'calc(100vh - theme("height.header"))',
      },
      minHeight: {
        body: 'calc(100vh - theme("height.header"))',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
