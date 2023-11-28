import { unstable_vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import Inspect from "vite-plugin-inspect"

export default defineConfig({
  clearScreen: false,
  plugins: [
    remix(),
    tsconfigPaths(),
    // Inspect(),
  ],
});

// vite-plugin-inspect
