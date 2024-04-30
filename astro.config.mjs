import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind({
    content: ['./**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
      extend: {},
      colors: {
        'resolution_blue':{
          DEFAULT: '#001d7e',
          100: '#00061a',
          200: '#000c33',
          300: '#00124d',
          400: '#001866',
          500: '#001d7e',
          600: '#0030cc',
          700: '#1a4fff',
          800: '#668aff',
          900: '#b3c4ff'
        }, 
        'forest_green': { 
          DEFAULT: '#008a31',
          100: '#001c0a',
          200: '#003713',
          300: '#00531d',
          400: '#006e27',
          500: '#008a31',
          600: '#00d44a',
          700: '#20ff6e',
          800: '#6aff9e',
          900: '#b5ffcf' 
        }, 
        'red_violet': { 
          DEFAULT: '#ba007c',
          100: '#250018',
          200: '#490031',
          300: '#6e0049',
          400: '#930062',
          500: '#ba007c',
          600: '#f900a6',
          700: '#ff3bbe',
          800: '#ff7cd3',
          900: '#ffbee9' 
        }, 
        'white': { 
          DEFAULT: '#ffffff',
          100: '#333333',
          200: '#666666',
          300: '#999999',
          400: '#cccccc',
          500: '#ffffff',
          600: '#ffffff',
          700: '#ffffff',
          800: '#ffffff',
          900: '#ffffff' 
        },
        'saffron': { 
          DEFAULT: '#f1bb0a',
          100: '#302502',
          200: '#604b04',
          300: '#907006',
          400: '#c09508',
          500: '#f1bb0a',
          600: '#f7ca37',
          700: '#f9d769',
          800: '#fbe59b',
          900: '#fdf2cd' 
        },
        'transparent': "transparent"
      },
    },
    plugins: [],
  })],
  output: 'static',
});