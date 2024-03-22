import { vitePreprocess } from "@sveltejs/vite-plugin-svelte"
import adapter from "@sveltejs/adapter-auto"

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    alias: {
      "@/*": "./path/to/lib/*",
    },
    adapter: adapter(),
  },
  preprocess: [vitePreprocess({})],
}

export default config
