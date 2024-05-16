---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "TaikongHub"
  text: "一站式媒体库解决方案"
  tagline: 自动订阅、追更、刮削入库，解放双手
  actions:
    - theme: brand
      text: 快速开始
      link: /docs/关于/语雀示例文章
    - theme: alt
      text: GitHub
      link: https://github.com/elog-x/yuque-vitepress

features:
  - icon:
      src: /image/icon/media.png
    title: 多媒体库支持
    details: Plex/Emby均支持，根据个人喜好自动选择；提供FileBall/Yamby等各种第三方客户端；媒体库涵盖电影、剧集、综艺、动漫、音乐...
  - icon: 
        src: /image/icon/rss.png
    title: 多渠道RSS订阅
    details: BT/PT等多渠道RSS，覆盖99%影视资源。支持自行添加订阅、实时追更、相同媒体多版本资源、特效字幕，充分满足你的需求
---

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #273c8f 30%, #36a440);
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(68px);
  }
}
</style>

