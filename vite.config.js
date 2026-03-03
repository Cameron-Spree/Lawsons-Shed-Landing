import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import crypto from 'crypto';

// Polyfill for older Node versions in Codespaces
if (!globalThis.crypto) {
  globalThis.crypto = {
    getRandomValues: function (buffer) {
      return crypto.randomFillSync(buffer);
    }
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
