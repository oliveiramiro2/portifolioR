/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html'
  ],
  theme: {
    extend: {
        backgroundImage: {
            'bg-paralax': "url(/src/assets/notebook.jpg)",
            'netflix-paralax': "url(/src/assets/netflix.png)",
            'youtube-paralax': "url(/src/assets/youtube.png)",
            'pokedex-paralax': "url(/src/assets/pokedex.png)",
        },
        keyframes: {
            blink: {
                '0%, 100%': {
                    opacity: 1,
                },
                '50%': {
                    opacity: 0.1,
                },
            }
        },
        animation: {
            blink: "blink .8s infinite"
        },
        fontFamily: {
            'itim': ['itim', 'cursive'],
            'great-vibes': ['"Great Vibes"', 'cursive'],
        },
    },
  },
  plugins: [],
}
