import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		port: 3000,
		hmr: {
			clientPort: 3001,
		},
	},
  build: {
    outDir: 'docs'
  }
});
