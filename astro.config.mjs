import { defineConfig } from 'astro/config';
import Unocss from "unocss/vite";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [Unocss()],
  },
});