import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "神楽坂 璇",
  description: "覆水随便收",
  lang: 'zh-CN',
  lastUpdated: true,
  head: [
    ['link', { rel: 'shortcut icon', href: '/images/favicon.ico' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: "96x96", href: '/images/favicon-96x96.png' }],
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/images/favicon.svg' }],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/images/apple-touch-icon.png' }]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about' },
      { text: 'Friends', link: '/friends' },
      { text: 'Blog', link: '/blog/' }
    ],

    docFooter: {
      prev: false,
      next: false
    },

    footer: {
      copyright: 'Copyright &copy; 2025 <a href="https://kagurazakaxuan.github.io/">Kagurazaka Xuan</a>. All rights reserved.'
    },

    sidebar: false,

    socialLinks: [
      { icon: 'github', link: 'https://github.com/KagurazakaXuan' },
      { icon: 'twitter', link: 'https://x.com/kagurazakaxuan'}
    ]
  }
})
