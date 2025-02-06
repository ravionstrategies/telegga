import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'float-slow': 'float-slow 8s ease-in-out infinite',
        'float-normal': 'float-normal 6s ease-in-out infinite',
        'float-fast': 'float-fast 4s ease-in-out infinite',
        'float-slow-reverse': 'float-slow-reverse 8s ease-in-out infinite',
        'float-normal-reverse': 'float-normal-reverse 6s ease-in-out infinite',
        'float-fast-reverse': 'float-fast-reverse 4s ease-in-out infinite',
        'twinkle': 'twinkle 4s ease-in-out infinite',
        'float-cluster': 'float-cluster 8s ease-in-out infinite',
      },
      keyframes: {
        'float-slow': {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(0, -15px)' },
        },
        'float-normal': {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(0, -10px)' },
        },
        'float-fast': {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(0, -5px)' },
        },
        'float-slow-reverse': {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(0, 15px)' },
        },
        'float-normal-reverse': {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(0, 10px)' },
        },
        'float-fast-reverse': {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(0, 5px)' },
        },
        'twinkle': {
          '0%, 100%': { opacity: '0.2' },
          '50%': { opacity: '0.7' },
        },
        'float-cluster': {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
          '50%': { transform: 'translate(-10px, -10px) rotate(5deg)' },
        },
      },
    },
  },
  plugins: [],
}

export default config 