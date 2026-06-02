/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,sgn,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Tons de cinza e pretos customizados para o Dark Mode de Engenharia
        zinc: {
          950: '#09090b',
          900: '#141417',
          800: '#202024',
          700: '#2a2a30',
          400: '#a1a1aa',
          300: '#d4d4d8',
          100: '#f4f4f5',
          50:  '#fafafa',
        },
        // Cor de destaque para a coluna de Hardware & Firmware
        emerald: {
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',
        },
        // Cor de destaque para a coluna de Backend & Cloud
        purple: {
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7',
        }
      },
      fontFamily: {
        // Fontes carregadas no seu Layout.astro
        sans: ['Inter', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      animation: {
        // Animação para o indicador de "Disponível para Projetos" no Hero
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        pulse: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: .4 },
        }
      }
    },
  },
  plugins: [],
}
