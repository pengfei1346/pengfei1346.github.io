import { defineConfig } from 'vitepress'

export default defineConfig({
    lang: 'zh-CN',
    title: "cpf的博客",
    // 主题配置
    themeConfig: {
        search: true,
        searchMaxSuggestions: 10,
        displayAllHeaders: true, // Default: false
        nav:  [
            // {
            //     text: "前端网聚",
            //     items: [
            //         { text: "前端综合", link: "/site/page" },
            //         { text: "HTML/CSS", link: "/site/html-css" },
            //         { text: "框架组件", link: "/site/framework" },
            //     ],
            // },
            // {
            //     text: "技术笔记",
            //     items: [
            //         { text: "VitePress", link: "/note/vitePress" },
            //         { text: "Vue", link: "/note/vue" },
            //         { text: "react", link: "/note/react" },
            //     ],
            // },
            {
                text: "首页",
                link: "/",
            },
            // { text: "更新日志", link: "" },
        ],
        sidebar: [
            {
                text: '2023',
                items: [
                    { text: '搭建个人博客', link: '/2023/blog-github' },
                    { text: '算法-快慢指针', link: '/2023/快慢指针' },
                ],
            },
            {
                text: 'vue3源码解析',
                items: [
                    // { text: 'ref', link: '/vue3/ref' },
                    { text: 'reactive', link: '/vue3/reactive' },
                ],
            }
        ],
        socialLinks: [
            { icon: 'github', link: 'https://github.com/pengfei1346/pengfei1346.github.io' }
        ]
    }
})
