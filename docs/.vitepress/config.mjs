import { defineConfig } from 'vitepress'
import getAdrList from '../scripts/getAdrList.js'
import transformPageData from '../scripts/transformPageData.js'
import { base } from './config/base.js'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base,
  title: 'eno-adr',
  description: 'A sample site for adr',
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
          ...getAdrList(false)
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Enokisan/eno-adr' }
    ]
  },

  // https://vitepress.dev/reference/site-config#transformpagedata
  transformPageData
})
