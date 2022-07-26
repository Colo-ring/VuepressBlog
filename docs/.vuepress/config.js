module.exports = {

    title: "Coloring",
    description: 'We beat on the boats against the current.',
    author: 'Coloring',
    dest: 'docs/.vuepress/dist',
    theme: 'reco',
    head: [
        // // 在移动端，搜索框在获得焦点时会放大，并且在失去焦点后可以左右滚动，这可以通过设置元来优化。
        ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no'}],
        // ['link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css'}],
        // ['link', { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css'}]
    ],
    themeConfig: {
        type: 'blog',
        blogConfig: {
            category: {
              location: 2,     // 在导航栏菜单中所占的位置，默认2
              text: 'Category' // 默认文案 “分类”
            },
            tag: {
              location: 3,     // 在导航栏菜单中所占的位置，默认3
              text: 'Tag'      // 默认文案 “标签”
            },
           // socialLinks: [     // 信息栏展示社交信息
           //   { icon: 'reco-github', link: 'https://github.com/recoluan' },
            //  { icon: 'reco-npm', link: 'https://www.npmjs.com/~reco_luan' }
            //]
        },
        
        sidebar: 'auto',
        subSidebar: 'auto', //在所有页面中启用自动生成子侧边栏，原 sidebar 仍然兼容

        // 时间轴
        nav: [
            { text: 'Home', link: '/', icon: 'reco-home' },
            { text: 'TimeLine', link: '/timeline/', icon: 'reco-date' },
            { text: 'GitHub', link: 'https://github.com/Colo-ring', icon: 'reco-github' }
        ],
        authorAvatar: '/head.png',
        logo: '/head.png',
        // 备案
        record: '陕ICP备2020017004号-1',
        recordLink: 'https://beian.miit.gov.cn/#/Integrated/index',
        // cyberSecurityRecord: '公安部备案文案',
        // cyberSecurityLink: '公安部备案指向链接',
        // 项目开始时间，只填写年份
        startYear: '2019'
    },
    // 博客配置,分类和标签

    plugins: [
      [
        "dynamic-title",
        {
          showIcon: "/favicon.ico",
          showText: "Welcome Back！",
          hideIcon: "/favicon.ico",
          hideText: "Wait ...",
          recoverTime: 2000
        }
      ],
      [
        '@vuepress-reco/vuepress-plugin-kan-ban-niang',
        {
          theme: ['shizuku','haru2','miku'],
          clean: true,
          modelStyle: { right: '50px', bottom: '0px', opacity: '1.0' },
          btnStyle: { right: '8px', bottom: '50px' },
          messageStyle: { right: '8px', bottom: '210px' },
          message:{ 
            welcome: '欢迎来到我的站点！' ,
            home: '心里的花，我想要带你回家。', 
            theme: '好吧，希望你能喜欢我的其他小伙伴。', 
            close: '你知道我喜欢吃什么吗？痴痴地望着你。' 
          }
        }
      ],
      [
      'meting',{
          //metingApi: "https://music.163.com/playlist?id=5018824147&userid=385682328",
          meting: {
            // // 网易
            // server: "netease",
            // // 读取歌单
            // type: "playlist",
            // mid: "5018824147",
            auto: 'https://music.163.com/playlist?id=6670472536'
          },  
          aplayer: {
            // 吸底模式
            fixed: true,
            mini: true,
            // 自动播放
            autoplay: true,
            // 歌曲栏折叠
            listFolded:true,
            // 颜色
            theme: '#FFB6C1',
            // 播放顺序为随机
            order: 'list',
            // 初始音量
            volume: 0.1,
            // 关闭歌词显示
            lrcType: 0
          },
          mobile :{
            // 手机端去掉cover图
            cover: false,
          }
      }
     ],
     [
      'cursor-effects',
      {
         size: 2, // size of the particle, default: 2
         shape: 'star', // shape of the particle, default: 'star'
         zIndex: 999999999, // z-index property of the canvas, default: 999999999
      }
      ],
      ['@vuepress-reco/vuepress-plugin-back-to-top']
    ]    
 }