// @ts-check
// @ts-check

import { defineConfig } from "astro/config";
import icon from "astro-icon";
import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  site: "https://github.com/Astrohelo",
  integrations: [
    icon({
      include: {
        mdi: ["*"], // This includes all MDI icons
      },
    }),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
  ],
});
