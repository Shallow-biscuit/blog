import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import docsToBlog from "./packages/docusaurus-plugin-docs-info/src";

const config: Config = {
  title: "浅浅小饼干",
  tagline: "浅浅小饼干の饼干坊，会有什么东西在这里呢？",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://biscuitqz.top",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "Shallow-biscuit", // Usually your GitHub org/user name.
  projectName: "Shallow-s-Biscuit-Factory", // Usually your repo name.

  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",

  plugins: [
    ["@gracefullight/docusaurus-plugin-tailwind", {}],
    [
      "docusaurus-plugin-content-docs-ex",
      {
        routeBasePath: "/",
        sidebarPath: "./sidebars.ts",
        // Please change this to your repo.
        // Remove this to remove the "edit this page" links.
        editUrl: "https://github.com/Shallow-biscuit/Shallow-s-Biscuit-Factory/edit/main",
        showLastUpdateTime: true,
      },
    ],
    ["docusaurus-plugin-docs-info", { debug: true }],
  ],
  markdown: {
    preprocessor({ filePath, fileContent }) {
      // 去掉第一行的#标题，因为不去掉的话会导致创建时间和阅读时间的错误
      if (fileContent.startsWith("# ")) {
        return fileContent.replace(/^# (.+?)[\r\n]+/, "");
      }
      return fileContent;
    },
  },

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "zh-CN",
    locales: ["zh-CN"],
  },

  presets: [
    [
      "classic",
      {
        docs: false,
        // docs: {
        //   routeBasePath: "/",
        //   sidebarPath: "./sidebars.ts",
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl: "https://github.com/Shallow-biscuit/Shallow-s-Biscuit-Factory",
        //   showLastUpdateTime: true,
        // },
        theme: {
          customCss: "./src/css/custom.css",
        },
        sitemap: {
          // @ts-ignore
          changefreq: "weekly",
          priority: 0.5,
          ignorePatterns: ["/tags/**"],
          filename: "sitemap.xml",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "Shallow.",
      logo: {
        alt: "Logo",
        src: "img/avatar.png",
      },
      items: [
        {
          position: "right",
          label: "主页",
          href: "/",
        },
        {
          position: "right",
          label: "全部",
          href: "/blog",
        },
        {
          position: "right",
          label: "MDEX",
          to: "/MDEX",
          // items: [
          //   {
          //     to: "/docs/MDEX/download",
          //     label: "我的谱面获取",
          //   },
          // ],
        },
        {
          type: "docSidebar",
          sidebarId: "mew",
          position: "right",
          label: "喵喵喵",
          to: "/mew",
        },
        {
          type: "docSidebar",
          sidebarId: "note",
          position: "right",
          label: "笔记",
          to: "/note",
        },
        {
          href: "http://disk.biscuitqz.top/",
          label: "文件站",
          position: "right",
        },
      ],
      hideOnScroll: true,
    },
    footer: {
      style: "dark",
      copyright: `<p>Copyright © ${new Date().getFullYear()} icodef.com, Built with Docusaurus.</p>
      <p><a href="https://beian.miit.gov.cn/" target="_blank" rel="nofollow">皖ICP备2024067432号</a></p>
      <p>若无特殊声明，本站所有内容遵循 <a rel="license" href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh-hans" >CC BY-NC-SA 4.0 协议</a></p>`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      // https://prismjs.com/download.html
      additionalLanguages: ["php", "bash", "docker", "json"],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
