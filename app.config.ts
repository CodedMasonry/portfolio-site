import { defineConfig } from "@solidjs/start/config";

export default defineConfig({
  server: {
    preset: "vercel",
    prerender: {
      routes: ["/"]
    }
  },
  ssr: true,
  vite: {
    plugins: [],
  },
});