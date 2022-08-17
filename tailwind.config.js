/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,vue}'],
  mode: 'jit',
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins'],
      }
    },
    colors: {
      'yankees-blue': '#181A37',
      'pearl-aqua': '#74C6B8',
      'cultured': '#F4F6FA',
      'mango-tango': '#FF7A45',
      'pastel-red': '#FF6264',
      'arsenic': '#3E424B',
      'cool-black': '#07255B',
      'auro-metal-saurus': '#66737F',
      'white': '#FFFFFF',
    }
  },
  plugins: []
}
