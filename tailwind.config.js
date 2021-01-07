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
    colors: {
      'hw-teal': '#50C3C5',
      'hw-light-teal': '#E5FBFF',
      'hw-brown': '#AF9577',
      'hw-gray': '#B5C9D8',
      white: '#FFFFFF',
    },
    extend: {
      screens: {
        '2xl': '1536px',
      },
      boxShadow: {
        'hw-shadow':
          '0 10px 40px -3px rgba(68, 187, 189, 0.35), 0 4px 6px -2px rgba(68, 187, 189, 0.60)',
      },
    },
  },
  variants: {},
  plugins: [],
}
