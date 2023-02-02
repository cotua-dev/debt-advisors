import { defineConfig } from "astro/config";
import type { AstroUserConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

// https://astro.build/config
export default <AstroUserConfig> defineConfig({
    integrations: [tailwind(), react()],
});
