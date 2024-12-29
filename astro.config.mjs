import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  site: "https://danniel.dev/",
  integrations: [tailwind(), sitemap(), robotsTxt()],
  output: "server",
  adapter: vercel({
    webAnalytics: { enabled: true },
  }),
});
