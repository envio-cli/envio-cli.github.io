import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "envio",
  tagline: "",
  favicon: "img/favicon.ico",

  url: "https://envio-cli.github.io",
  baseUrl: "/",

  

  organizationName: "envio-cli",
  projectName: "envio-cli.github.io",

  deploymentBranch: "gh-pages",

  onBrokenLinks: "ignore",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "envio",
        path: "envio",
        routeBasePath: "",
        sidebarPath: require.resolve("./sidebarsEnvio.ts"),
      },
    ],
  ],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      {
        docs: {
          sidebarPath: "./sidebars.ts",
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: "dark",
    },
    announcementBar: {
      id: 'support_palestine',
      content:
        'Support Palestine 🇵🇸 <a target="_blank" rel="noopener noreferrer" href="https://irusa.org/middle-east/palestine/"> Help Provide Humanitarian Aid to Palestine</a>.',
      backgroundColor: '#121212',
      textColor: '#fff',
      isCloseable: false,
    },
    navbar: {
      title: "",
      logo: {
        alt: "envio logo",
        srcDark: "img/logo.svg",
        src: "img/logo-light.svg",
      },
      items: [
        {
          label: "Getting Started",
          position: "right",
          items: [
            {
              label: "About",
              to: "/about",
            },
            {
              label: "Installation",
              to: "/installation",
            },
            {
              label: "Quick Start",
              to: "/quick-start",
            },
            {
              label: "Usage",
              to: "/usage",
            },
          ],
        },
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "right",
          label: "Docs",
        },
        {
          href: "https://github.com/envio-cli/envio",
          label: "GitHub",
          position: "right",
        },
      ],
    },

    prism: {
      theme: prismThemes.oneLight,
      darkTheme: prismThemes.vsDark,
      additionalLanguages: ["rust", "bash"],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
