module.exports = {
    base: '/gulu-demo/',
    theme: 'reco',
    title: '滑稽UI',
    description: '一个好用的UI框架',
    themeConfig: {
        lastUpdated: 'Last Updated', // string | boolean
        logo: '/public/images.png',
        authorAvatar: '/public/huaji.svg',
        nav: [
            {text: '主页', link: '/'},
            {text: '文档', link: '/guide/'},
            {text: '交流', link: 'https://google.com'},
        ],
        sidebar: [
            {
                title: '入门',
                children: [
                    '/install/',
                    '/get-started/'
                ]
            },
            {
                title: '组件',
                children: [
                    '/components/button'
                ]
            },

        ],

    }
}