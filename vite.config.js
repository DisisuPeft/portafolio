import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    // Directorio de salida (por defecto es 'dist')
    outDir: "dist",
    // Genera un manifest.json (opcional)
    manifest: false,
    rollupOptions: {
      // Ruta de entrada relativa correcta
      input: path.resolve(__dirname, "src", "main.js"),
    },
  },
  // Base pública, ajusta si despliegas en un subdirectorio
  base: "/",
});
