import { defineConfig } from 'vitepress'
export default defineConfig({
    lang: 'zh-CN',
    title: "cpf的博客",
    themeConfig: {
        nav: [
            { text: '首页', link: '/' },
        ],
        sidebar: [
            {
                text: '2023',
                items: [
                    { text: '使用VitePress和Github搭建个人博客，可以自动构建和发布', link: '/2023/blog-github' },
                ],
            },
        ],
        socialLinks: [
            { icon: 'github', link: 'https://github.com/jzplp/jzplp.github.io' }
        ]
    }
})
