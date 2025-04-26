import { defineConfig } from 'vitepress'
import getAdrList from '../scripts/getAdrList'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "eno-adr",
  description: "A sample site for adr",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'ADR List', link: '/pages/adr/' },
      { text: 'Tag Search', link: '/pages/tag/' }
    ],

    sidebar: [
      {
        text: 'ADRを探す',
        items: [
          { text: 'すべてのADR', link: '/pages/adr/' },
          { text: 'タグで探す', link: '/pages/tag/' }
        ],
      },
      {
        text: 'ADR一覧',
        items: [
          ...getAdrList()
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Enokisan/eno-adr' }
    ]
  }
})
