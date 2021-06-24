# 正大创新团队官方网站前端项目

## 操作命令
### 首次运行或有依赖变更时执行安装 `npm install`
### 启动本地服务 `npm run serve`
### 编译生产环境代码包 `npm run build`
### 执行单元测试 `npm run test:unit`
### 执行代码校验 `npm run lint`

## 规范及标准
1. 命名规范
   1. 文件名：
      1. Vue 组件文件：使用大驼峰，扩展名为 vue。如：ExampleComponent.vue
      2. 脚本文件：使用小驼峰，扩展名为 js。如：exampleLogic.js
      3. 资源文件：
         1. 图标：使用小写字母以 icon 起始并使用"-"链接。如：icon-example-icon.png
         2. 背景图片：使用小写字母以 bg 起始并使用"-"链接。如：bg-example-background.jpg
         3. 广告图片：使用小写字母以 ad 起始并使用"-"链接。如：ad-example-advertisement.jpg
         4. 其他无分类图片：使用小写字母以 img 起始并使用"-"链接。如：img-example-image.jpg
         5. 视频：使用小写字母以 video 起始并使用"-"链接。如：video-example-video.mp4
         6. 扩展名小写，JPEG 格式以 .jpg 为统一扩展名
   2. Vue 组件名：使用大驼峰，并与文件名一致。如：ExampleComponent
   3. 变量、方法名：使用小驼峰。如：exampleVariable、exampleFunction
   4. 常量名：使用大写字母下划线分隔。如：EXAMPLE_CONST
   5. 样式名：全小写并使用"-"连接。如：example-style
   6. 命名规则：使用英语单词组合，见文知义，不简写
2. 代码规范及校验：
   1. 采用 [Airbnb](https://github.com/airbnb/javascript) 标准定义代码规范
   2. 使用 [ESLint](https://eslint.org/) 进行代码校验
   3. 使用 [Yorkie](https://github.com/yyx990803/yorkie) 作为 GitHooks 预提交校验
3. 代码风格： 
   1. 使用空格缩进，缩进量为2个空格
   2. 单行不超过120个字符
   3. 使用 [Prettier](https://prettier.io/) 统一代码风格并自动格式化
4. 提交信息（Commit Message)：可以准确描述本次提交的涉及的功能模块和具体修改内容，非相关内容请分开多次提交

## UI组件库
[Vuetify](https://vuetifyjs.com/zh-Hans/)

## 项目主要文件与目录结构说明
```
.
├── README.md    项目说明文档
├── babel.config.js    Babel配置文件
├── jest.config.js    Jest单元测试配置文件
├── package-lock.json    项目依赖版本配置文件
├── package.json    项目配置文件
├── public
│   ├── favicon.ico    网站图标
│   └── index.html    网站HTML模板
├── src
│   ├── App.vue    全局页面
│   ├── assets    静态资源文件目录，含图片、视频等
│   ├── components    公用组件目录
│   │   └── HeaderNav.vue    顶部导航栏
│   ├── main.js    项目入口文件
│   ├── plugins    插件目录
│   │   └── vuetify.js    UI组件库Vuetify配置文件
│   ├── router.js    路由文件
│   └── views    页面目录
│       ├── AboutUs.vue    关于我们页面
│       ├── Homepage.vue    主页
│       ├── ProjectInfo.vue    项目介绍页面
│       ├── RecruitmentInfo.vue    招聘信息页面
│       └── TeamInfo.vue    团队介绍页面
└── tests
    └── unit    单元测试目录
```
