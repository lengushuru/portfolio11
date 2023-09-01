// import { defineConfig } from 'vite';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { copy } from 'vite-plugin-copy'; // Import the 'copy' function specifically

export default defineConfig({
  plugins: [
    react(),
    copy({
      patterns: [
        { from: 'src/images', to: 'dist/images' }, // Adjust the source and destination paths as needed
      ],
    }),
  ],
});
