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
                    { text: '搭建个人博客', link: '/2023/blog-github' },
                ],
            },
        ],
        socialLinks: [
            { icon: 'github', link: 'https://github.com/pengfei1346/pengfei1346.github.io' }
        ]
    }
})
