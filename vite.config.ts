import { sveltekit } from "@sveltejs/kit/vite"
import { defineConfig } from "vitest/config"

import { buildSearchIndex } from "./src/lib/build_index"

export default defineConfig({
  plugins: [
    sveltekit(),
    {
      name: 'postbuild-commands', // the name of your custom plugin. Could be anything.
      buildEnd: async () => {
        console.log('postbuild-commands plugin running')
      },
      closeBundle: () => {
        console.log('postbuild-commands plugin closing bundle')
        buildSearchIndex()
      },
    }, 
  ],
  test: {
    include: ["src/**/*.{test,spec}.{js,ts}"],
  },
})
