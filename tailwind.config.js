module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    fontFamily: {
      calistoga: ['Calistoga', 'cursive'],
      garamond: ['Cormorant Garamond', 'serif'],
      upright: ['Cormorant Upright', 'serif'],
      crete: ['Crete Round', 'serif'],
      poppins: ['Poppins', 'sans-serif'],
      montserrat: ['Montserrat', 'sans-serif'],
    },
    extend: {
      screens: {
        '2xl': '1536px',
      },
      boxShadow: {
        'hw-shadow':
          '0 10px 40px -3px rgba(68, 187, 189, 0.35), 0 4px 6px -2px rgba(68, 187, 189, 0.60)',
      },
      colors: {
        'hw-teal': '#50C3C5',
        'hw-light-teal': '#E5FBFF',
        'hw-brown': '#AF9577',
        'hw-gray': '#ECECEC',
        white: '#FFFFFF',
      },
      spacing: {
        14: '3.5rem',
        72: '18rem',
        80: '20rem',
        96: '24rem',
      },
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/line-clamp')],
}
