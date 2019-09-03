module.exports = {
    base: '/FE-Weekly/',
    themeConfig: {
        searchMaxSuggestions: 10,
        lastUpdated: '最后更新',
        sidebar: 'auto',
        nav: [
            {
                text: '首页',
                link: '/'
            },
            {
                text: 'Github',
                link: 'https://github.com/bee-fe/FE-Weekly'
            }
        ]
    },
    markdown: {
        lineNumbers: true
    },
    locales: {
        '/': {
            lang: 'zh-CN',
            title: '小蜜蜂前端周刊',
            description: '好好学习，天天向上。'
        }
    }
};
