import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
    plugins: [react()],
    base: "./",
    build: {
        emptyOutDir: true,
        outDir: "../html",
        assetsDir: ".",
        rolldownOptions: {
            output: {
                entryFileNames: "bundle.js",
                chunkFileNames: "bundle.js",
                assetFileNames: "style.css"
            }
        }
    }
});