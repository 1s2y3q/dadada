/*
 * @Author: 22017365 sunyuanquan@haier.com
 * @Date: 2024-03-25 14:21:03
 * @LastEditors: 22017365 sunyuanquan@haier.com
 * @LastEditTime: 2024-03-25 15:05:44
 * @FilePath: \vitepress\docs\.vitepress\navbar\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

// docs/.vitepress/relaConf/navbar.ts
import { DefaultTheme } from "vitepress";
export const nav: DefaultTheme.NavItem[] = [
  {
    text: "首页",
    link: "/", // 表示docs/index.md
  },
  {
    text: "项目",
    items: [
      {
        text: "日清",
        link: "/column/Project/dailSummary.md", // 表示docs/Project/dailSummary.md
      },
      {
        text: "需求整理",
        link: "/column/Project/requirements.md",
      },
      {
        text: "代码逻辑",
        link: "/column/Project/codelogic.md",
      },
    ],
  },
  {
    text: "前端开发",
    items: [
      {
        text: "数据结构与算法",
        link: "/column/Algorithm/", // 对应docs/column/Algorithm下的idnex.md文件
      },
    ],
  },
  {
    text: "关于",
    items: [
      {
        text: "乱七八糟",
        link: "/column/Project/aboutheihei.md",
      },
    ],
  },
  {
    text: "关于我",
    items: [
      { text: "Github", link: "https://github.com/Jacqueline712" },
      {
        text: "掘金",
        link: "https://juejin.cn/user/3131845139247960/posts",
      },
      {
        text: "飞书社区",
        link: "https://pzfqk98jn1.feishu.cn/wiki/space/7193915595975491587?ccm_open_type=lark_wiki_spaceLink",
      },
    ],
  },
];
