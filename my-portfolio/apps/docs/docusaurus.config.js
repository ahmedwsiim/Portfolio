// @ts-check

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "My Notes & Blog",
  tagline: "Thoughts, tutorials, and documentation",
  favicon: "img/favicon.ico",
  url: "https://your-site.com",
  baseUrl: "/docs/",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "My Notes",
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Notes",
          },
          { to: "/blog", label: "Blog", position: "left" },
          {
            href: "/",
            label: "Back to Portfolio",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        copyright: `Copyright © ${new Date().getFullYear()}. Built with Docusaurus.`,
      },
    }),
};

module.exports = config;
