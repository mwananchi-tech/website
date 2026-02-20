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
  plausible: {
    enabled: true,
    domain: "mwananchi-tech.github.io",
    src: "https://plausible.c12i.xyz/js/script.js",
  },
});
