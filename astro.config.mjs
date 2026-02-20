import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://mwananchi-tech.github.io",
  image: {
    service: { entrypoint: "astro/assets/services/noop" },
  },
  markdown: {
    shikiConfig: {
      theme: "github-dark",
    },
  },
});
