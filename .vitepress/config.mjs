import { defineConfig } from 'vitepress'
// base: "/vitepress-demo/",
// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/",
  head: [["link", { rel: "icon", href: "/book.png" }]],
  title: "技术文档中心",
  description: "专业的技术文档管理平台",
  themeConfig: {
    logo: '/book.png',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      {
        text: '指南',
        items: [
          { text: '什么是文档中心？', link: '/guide/what-is' },
          { text: '快速开始', link: '/guide/getting-started' },
          { text: '文档编写', link: '/guide/writing' },
          { text: '文档管理', link: '/guide/management' }
        ]
      },
      {
        text: '参考',
        items: [
          { text: '配置说明', link: '/reference/config' },
          { text: '主题定制', link: '/reference/theme' }
        ]
      }
    ],

    sidebar: {
      '/guide/': [
        {
          text: '介绍',
          items: [
            { text: '什么是文档中心？', link: '/guide/what-is' },
            { text: '快速开始', link: '/guide/getting-started' }
          ]
        },
        {
          text: '基础',
          items: [
            { text: '文档编写', link: '/guide/writing' },
            { text: '文档管理', link: '/guide/management' }
          ]
        }
      ],
      '/reference/': [
        {
          text: '参考文档',
          items: [
            { text: '配置说明', link: '/reference/config' },
            { text: '主题定制', link: '/reference/theme' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

    // 设置搜索框的样式
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            noResultsText: "无法找到相关结果",
            resetButtonTitle: "清除查询条件",
            footer: {
              selectText: "选择",
              navigateText: "切换",
            },
          },
        },
      },
    },

    // 添加文档页脚导航
    docFooter: {
      prev: '上一页',
      next: '下一页'
    }
  }
})
