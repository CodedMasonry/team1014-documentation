// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://1014.brockshaffer.dev",
  integrations: [
    starlight({
      title: "Bad Robots",
      logo: {
        src: "./public/favicon.jpeg",
      },
      favicon: "./public/favicon.jpeg",
      editLink: {
        baseUrl:
          // The base link to edit documentation
          "https://github.com/CodedMasonry/team1014-documentation/edit/main/src/content/docs/",
      },
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/BadRobots1014",
        },
      ],
      sidebar: [
        {
          label: "Start Here",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Introduction", slug: "introduction" },
            { label: "Competition", slug: "competition" },
          ],
        },
        {
          label: "Guides",
          autogenerate: { directory: "guides" },
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
      ],
    }),
  ],
});
