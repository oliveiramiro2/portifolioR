/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html'
  ],
  theme: {
    extend: {
        backgroundImage: {
            'intro': "url(/src/assets/notebook.jpg)",
            'netflix-paralax': "url(/src/assets/netflix2.png)",
            'youtube-paralax': "url(/src/assets/youtube2.png)",
            'pokedex-paralax': "url(/src/assets/pokedex2.png)",
        },
        colors: {
            'pallet-purple': "#6945b8",
            'pallet-black': "#03001C",
            'pallet-cyan': "#5B8FB9",
            'pallet-blue': "#B6EADA",
        },
        fontFamily: {
            'itim': ['itim', 'cursive'],
            'great-vibes': ['"Great Vibes"', 'cursive'],
        },
    },
  },
  plugins: [],
}
