module.exports = {
    base: '/gulu-demo/',
    // theme: 'reco',
    title: '滑稽UI',

    description: '一个好用的UI框架',
    themeConfig: {
        logo: '/assets/huaji.svg',
        noFoundPageByTencent: false,
        nav: [
            {text: '主页', link: '/',icon: 'reco-home'},
            {text: '文档', link: '/guide/',icon: 'reco-document'},
            {text: '交流', link: 'https://github.com/254412246',icon: 'reco-github'},
        ],
        sidebar: [
            {
                title: '入门',
                children: [
                    '/install/',
                    '/startup/'
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