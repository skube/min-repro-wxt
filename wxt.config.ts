// wxt.config.ts
import { defineConfig } from 'wxt';

export default defineConfig({
  zip: {
    exclude: [
      '**/*.json',       // Exclude all .json files
      '!manifest.json',  // Include manifest.json
    ],
  },
});
