import { defineConfig } from "astro/config";
import { remarkReadingTime } from "./remark-reading-time.mjs";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  trailingSlash: "always",
  site: "https://themaverick.net.au",
  integrations: [sitemap()],
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
});
