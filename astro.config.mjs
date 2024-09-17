import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import { remarkReadingTime } from "./remark-reading-time.mjs";

// https://astro.build/config
export default defineConfig({
  trailingSlash: "always",
  site: "https://themaverick.net.au",
  integrations: [sitemap()],
  markdown: {
    remarkPlugins: [remarkReadingTime],
    extendDefaultPlugins: true,
  },
});
