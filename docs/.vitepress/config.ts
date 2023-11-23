import process from 'node:process'
import { defineConfig, getThemeConfig } from '@sugarat/theme/node'
// import type { Theme } from '@sugarat/theme'
// import { cursorEffects } from '@anyfork/vuepress-plugin-cursor-effects-next'
// import { dynamicTitle } from '@anyfork/vuepress-plugin-dynamic-title-next'
// import { ribbon } from '@anyfork/vuepress-plugin-ribbon-next'
// import { sakura } from '@anyfork/vuepress-plugin-sakura-next'


const baseUrl = '/'

const extraHead: any
    = process.env.NODE_ENV === 'production'
    ? [
        [
            'script',
            {
                charset: 'UTF-8',
                id: 'LA_COLLECT',
                src: '//sdk.51.la/js-sdk-pro.min.js'
            }
        ],
        [
            'script',
            {},
            'LA.init({id: "Jgmg5avjAUvoyePS",ck: "Jgmg5avjAUvoyePS",hashMode: true})'
        ],
    ]
    : []

const blogTheme = getThemeConfig({
    themeColor: 'el-blue',
    author: 'cpf',
    // popover: {
    //   title: '公告',
    //   body: [
    //     { type: 'text', content: '👇公众号👇---👇 微信 👇' },
    //     {
    //       type: 'image',
    //       src: 'xxx'
    //     },
    //     {
    //       type: 'text',
    //       content: '欢迎大家私信交流'
    //     }
    //   ],
    //   duration: -1
    // },
    // friend: [
    //   {
    //     nickname: '',
    //     des: '',
    //     avatar:
    //       '',
    //     url: ''
    //   }
    // ],
    search: false,
    recommend: {
        showSelf: true,
        nextText: '下一页',
        style: 'sidebar'
    },
})

const plugins = [
    //鼠标点击特效插件
    // cursorEffects({
    //   size: 4,
    //   shape: 'star'
    // }),
    // //动态title特效插件
    // dynamicTitle(),
    // //彩带
    // ribbon({
    //   size: 120, // 默认数据
    //   opacity: 0.3, //  透明度
    //   zIndex: -1, //  层级
    //   option: {
    //     // 色带HSL饱和度
    //     colorSaturation: '80%',
    //     // 色带HSL亮度量
    //     colorBrightness: '60%',
    //     // 带状颜色不透明度
    //     colorAlpha: 0.65,
    //     // 在HSL颜色空间中循环显示颜色的速度有多快
    //     colorCycleSpeed: 6,
    //     // 从哪一侧开始Y轴 (top|min, middle|center, bottom|max, random)
    //     verticalPosition: 'max',
    //     // 到达屏幕另一侧的速度有多快
    //     horizontalSpeed: 200,
    //     // 在任何给定时间，屏幕上会保留多少条带
    //     ribbonCount: 3,
    //     // 添加笔划以及色带填充颜色
    //     strokeSize: 0,
    //     // 通过页面滚动上的因子垂直移动色带
    //     parallaxAmount: -0.5,
    //     // 随着时间的推移，为每个功能区添加动画效果
    //     animateSections: true
    //   },
    //   //  点击彩带  true显示  false为不显示
    //   ribbonShow: false,
    //   // 滑动彩带
    //   ribbonAnimationShow: true
    // }),
    // //樱花特效
    // sakura({
    //   sakura_zindex: 1,
    //   sakura_img: '/blog-docs/images/blue.png'
    // }),
]

export default defineConfig({
    extends: blogTheme,
    ignoreDeadLinks: true,
    sitemap: {
        hostname: '',
    },
    lang: 'zh-cn',
    title: '笔记',
    description:
        '个人博客，记录随笔与学习笔记',
    head: [
        // <meta name="baidu-site-verification" content="codeva-b08avp82Uj" />
        ['meta', { name: 'theme-color', content: '#ffffff' }],
        ['link', { rel: 'icon', href: '/favicon.ico', type: 'image/png' }],
        [
            'link',
            {
                rel: 'alternate icon',
                href: '/favicon.ico',
                type: 'image/png',
                sizes: '16x16'
            }
        ],
        ['link', { rel: 'mask-icon', href: '/favicon.ico', color: '#ffffff' }],
        [
            'link',
            { rel: 'apple-touch-icon', href: '/favicon.ico', sizes: '180x180' }
        ],
    ],
    vite: {
        server: {
            port: 4000,
            host: '0.0.0.0'
        },
        optimizeDeps: {
            include: ['element-plus'],
            exclude: ['@sugarat/theme']
        }
    },
    lastUpdated: true,
    //注册插件
    // plugins: plugins,
    themeConfig: {
        search: {
            provider: 'local'
        },
        lastUpdatedText: '上次更新于',
        logo: '',
        nav: [
            {
              text: '关于',
              link: '/about'
            },
            {
                text: '思维导图',
                link: '/mapping/'
            },
            {
                text: '笔记',
                items: [
                    { text: '系统搭建', link: '/note/system/' },
                    { text: 'node', link: '/note/node/' },
                    { text: '组件库搭建', link: '/note/components/' },
                    { text: '微前端', link: '/note/microapp/' },
                    { text: '概念性知识', link: '/note/concept/' },
                    { text: '其他', link: '/note/other/' },
                ]
            },
            {
                text: '前端',
                items: [
                    { text: 'javascript', link: '/front/javascript/' },
                    { text: 'typescript', link: '/front/typescript/' },
                    { text: 'css', link: '/front/css/' },
                    { text: '设计模式', link: '/front/design/' },
                    { text: '手写代码', link: '/front/coding/' },
                    { text: '性能优化', link: '/front/performance/' },
                    { text: '工程化', link: '/front/CICD/' },
                    { text: 'Web Worker', link: '/front/Web-Worker/' },
                ]
            },
            {
                text: '计算机基础',
                items: [
                    { text: '计算机网络', link: '/internet/' },
                ]
            },
            {
                text: '面试系列',
                items: [
                    { text: '算法与数据结构', link: '/interview/algorithm/' },
                    { text: '常见面试题', link: '/interview/questions/' },
                    { text: '综合问题', link: '/interview/other/' },
                ]
            },
            {
                text: '突击课程',
                items: [
                    { text: '开始', link: '/quick/start/' },
                    { text: '常见面试题', link: '/quick/questions/' },
                    { text: '综合问题', link: '/quick/other/' },
                ]
            },

        ],

        socialLinks: [
            { icon: 'github', link: 'https://github.com/pengfei1346/pengfei1346.github.io' }
        ]
    }
})
