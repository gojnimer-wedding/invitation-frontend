// @ts-check
import { defineConfig, envField } from "astro/config";

import node from "@astrojs/node";

import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  output: "server",

  adapter: node({
    mode: "standalone",
  }),
  env: {
    schema: {
      GOOGLE_API_KEY: envField.string({
        context: "server",
        access: "public",
      }),
    },
  },
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    react(),
  ],
});
