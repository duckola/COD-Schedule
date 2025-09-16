import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Replace <username> and <repo-name> with your GitHub info
export default defineConfig({
  base: '/COD-Schedule/',
  plugins: [react()],
});
