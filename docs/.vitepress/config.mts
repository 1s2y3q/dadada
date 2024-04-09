/*
 * @Author: 22017365 sunyuanquan@haier.com
 * @Date: 2024-03-25 14:12:42
 * @LastEditors: 22017365 sunyuanquan@haier.com
 * @LastEditTime: 2024-03-25 15:30:11
 * @FilePath: \vitepress\docs\.vitepress\config.mts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineConfig } from "vitepress";

import { nav, sidebar } from "../relaConf";
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "哒哒哒",
  description: "A VitePress Site",
  themeConfig: {
    // i18nRouting: true,
    lastUpdated: {
      text: "Updated at",
      formatOptions: {
        dateStyle: "full",
        timeStyle: "medium",
      },
    },
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2019-present Evan You",
    },
    search: { provider: "local" },
    logo: "/avatar.png", // 表示docs/public/avartar.png
    outline: {
      level: [2, 6],
      label: "目录",
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: nav,
    // [
    //   { text: "首页", link: "/" },
    //   { text: "个人成长", link: "/markdown-examples" },
    // ]
    sidebar: sidebar,
    // [
    //   {
    //     text: "Examples",
    //     items: [
    //       { text: "Markdown Examples", link: "/markdown-examples" },
    //       { text: "Runtime API Examples", link: "/api-examples" },
    //     ],
    //   },
    // ]
    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
  base: "/dadada/",
});
