module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        pumpoptidemibold: ['pumpoptidemibold', 'Helvetica', 'Arial'],
        pumpoptimedium: ['pumpoptimedium', 'Helvetica', 'Arial'],
      },
      colors: {
        customYellow: '#f1c40e',
        customBlue: '#2880b9',
        customGreen: '#6e9140',
        customGray: '#f0f0f0',
        customOrange: '#daa06d',
      },
      backgroundImage: {
        diagonalStripes: "url('../images/diagonal-stripes.svg')",
        characterBg: "url('/images/character_bg.png')",
      },
      boxShadow: {
        custom: '0 0 0 4px #eaddca, 2px 2px 4px 2px rgba(0,0,0,0.5)',
        customActive: '0 0 0 4px #eaddca, 1.5px 1.5px 2.5px 1.5px rgba(0,0,0,0.5)',
      },
    },
  },
  variants: {
    extend: {
      transform: ['hover', 'active'],
      scale: ['hover', 'active'],
      opacity: ['hover'],
    },
  },
  plugins: [],
};
