import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    // Falls back to empty string to prevent build errors if env var is missing
    'process.env.API_KEY': JSON.stringify(process.env.API_KEY || "") 
  }
});