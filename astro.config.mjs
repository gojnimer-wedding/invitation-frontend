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
      SUPABASE_URL: envField.string({
        context: "server",
        access: "public",
      }),
      SUPABASE_ANON_KEY: envField.string({
        context: "server",
        access: "secret",
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
