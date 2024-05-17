import { defineConfig } from 'vitepress'
import { genYuqueSideBar } from "../../utils/route";
import { YuQueSVG } from "../../utils/assists";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "zh-CN",
  title: "TaikongHub",
  description: "一站式媒体库解决方案",
  lastUpdated: true,
  cleanUrls: true,
  ignoreDeadLinks: true,
  head: [
      ["script", { src: "/_vercel/insights/script.js", defer: true }],
    ["script", { src: "/_vercel/speed-insights/script.js", defer: true }],
    ["script", { src: "http://192.9.135.211:3000/script.js", "data-website-id": "96795d58-80f1-4162-99a6-9397c5c472d8", defer: true }]
  ],
  themeConfig: {
    search: {
      provider: 'local'
    },
    outline: [2,6],
    nav: [
      { text: '首页', link: '/' },
      // { text: '配置文档', link: '/docs/入门指引/快速开始', activeMatch: '/docs/' },
      // { text: '短路由模式', link: '/docs-shorturl/ssuhngw0yb3dgkkg', activeMatch: '/docs-shorturl/' }
    ],
    sidebar: {
      "/docs/": await genYuqueSideBar('/docs'),
      // "/docs-shorturl/": await genYuqueSideBarWithShortUrl('/docs-shorturl')
    },
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },
    socialLinks: [
      { icon: { svg: YuQueSVG }, link: "https://www.yuque.com/1874w/yuque-vitepress-template" },
      { icon: 'github', link: 'https://github.com/godlike060236/yuque-vitepress' }
    ],
    footer: {
      message: 'Powered by <a href="https://www.yuque.com/1874w/yuque-vitepress-template" target="_blank">语雀</a>  & <a href="https://vitepress.dev" target="_blank">VitePress</a> with <a href="https://github.com/LetTTGACO/elog" target="_blank">Elog</a>',
      copyright: 'Copyright © 2024-present'
    },
  }
})
