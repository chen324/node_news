###########环境依赖  
"koa": "^2.11.0",  
"koa-body": "^4.1.1",  
"koa-router": "^7.4.0",  
"koa-static": "^5.0.0",  
"koa-views": "^6.2.1",  
"mysql2": "^2.1.0",  
"pug": "^2.0.4"  

###########部署步骤  
1.npm install // 安装node运行环境  

2.nodemon app.js // 启动项目  

###########目录结构描述  
│  app.js             // 项目主入口  
│  package-lock.json  // 环境依赖具体信息  
│  package.json       // 环境依赖  
│  README.md          // help  
│  router.js          // 路由主入口  
│    
├─controller // 控制器  
│  ├─admin  
│  │      index.js    // 后台管理页面的控制器  
│  │        
│  └─news  
│          index.js   // news 控制器  
│            
├─routers  
│      adminRouter.js // 后台管理页路由  
│      newsRouter.js  // 新闻页路由  
│        
├─service  
│  ├─admin  
│  │      index.js    // 后台管理页数据  
│  │        
│  └─news  
│          index.js   // 新闻页数据  
│            
├─static              // 静态资源  
│  ├─admin  
│  │  ├─css  
│  │  │      addNews.css  
│  │  │      admin.css  
│  │  │      newsList.css  
│  │  │        
│  │  └─img  
│  │          img.png  
│  │            
│  ├─images  
│  │      jianli.jpg  
│  │        
│  ├─news  
│  │  └─img  
│  │          img.png  
│  │            
│  └─uploads  
│          74a278d6868f258c7f2183fec2f9aa02.jpg  
│          8b464a2c89d5669db85effc63e190167.jpg  
│          b7802a7fad4e5e29c48d0ae88e8b7a08.jpg  
│          屏幕截图(1).png  
│            
└─views                // 视图呈现  
    ├─admin  
    │      addNewsPage.pug  
    │      index.html  
    │      index.pug  
    │      newsListPage.pug  
    │        
    └─news  
            detail.pug  
            index.pug  