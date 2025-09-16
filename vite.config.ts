// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/COD-Schedule/', // use your repo name here
  plugins: [react()],
});