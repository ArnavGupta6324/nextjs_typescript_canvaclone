// postcss.config.ts

import { defineConfig } from 'vite';  // If you're using Vite; you might not need this for Next.js

const config = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer')
  ]
};

export default config;
