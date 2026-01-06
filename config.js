// =========================================================
// 谭荣仁的个人主页 - 内容配置文件
// 使用方法：只修改引号 '' 中的文字，不要删除逗号或括号
// =========================================================

const siteConfig = {
    // 1. 个人基础信息
    profile: {
        name: "TAN RONGREN",
        title: "Director & Video Editor",
        slogan: "用镜头捕捉灵感，用剪辑重塑商业价值",
        description: "我是谭荣仁，一名拥有丰富经验的短视频广告编导。擅长将品牌需求转化为极具传播力的视觉语言。",
        // 头像图片链接 (可以是本地文件名，也可以是网络链接)
        avatar: "https://images.unsplash.com/photo-1601506521937-244b01c8212f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        // 你的微信二维码图片链接
        wechatQr: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=WeChatID_TanRongren" 
    },

    // 2. 数据亮眼成绩
    stats: [
        { number: "5+", label: "年行业经验" },
        { number: "200+", label: "商业成片" },
        { number: "10M+", label: "全网播放量" },
        { number: "100%", label: "交付好评率" }
    ],

    // 3. 精选作品 (可以无限复制添加 {})
    works: [
        {
            title: "某知名护肤品夏季新品TVC",
            category: "美妆品牌",
            image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            link: "#" // 点击后跳转的视频链接，如B站或抖音链接
        },
        {
            title: "城市SUV试驾体验宣传片",
            category: "汽车行业",
            image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            link: "#"
        },
        {
            title: "抖音百万赞剧情号《职场图鉴》",
            category: "信息流短剧",
            image: "https://images.unsplash.com/photo-1574717432707-c2571987ba8e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            link: "#"
        }
    ],

    // 4. 工作经历
    experience: [
        {
            role: "高级广告编导",
            company: "XX 传媒广告有限公司",
            time: "2021.06 - 至今",
            desc: "负责公司核心KA客户（汽车、3C类）的短视频创意策划与执行。统筹摄制团队，把控从脚本到成片的每一个细节。"
        },
        {
            role: "短视频剪辑师/策划",
            company: "XX 科技有限公司",
            time: "2019.03 - 2021.05",
            desc: "负责企业抖音蓝V账号的运营与内容产出。独立完成拍摄与后期剪辑工作，熟练使用 PR、AE、DaVinci 等后期软件。"
        }
    ],

    // 5. 联系方式
    contact: {
        phone: "138-0000-0000",
        email: "tan.rongren@email.com",
        // 社交媒体链接
        douyin: "#",
        weixin: "#",
        emailLink: "mailto:tan.rongren@email.com"
    }
};