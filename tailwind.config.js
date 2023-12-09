/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily : {
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
        'titulos': '#2A4ECA',
        'secundaria': '#171717',
        'fundo-input': '#313131',
        'texto-input': '#7C8BA0',
        'fundo-intens': '#CFE2FF',
        'botao-header': '#0D6EFD',
        'pontos': '#595959',
        'descricao': '#414141',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ]
}

