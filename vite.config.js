import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { script } from "framer-motion/client";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: { host: "::", port: 5173 }
});

import { scripts } from "/IT/soc-cyber-portfolio/package.json";

({
  "scripts": {
    "test": "jest"
  }
})

