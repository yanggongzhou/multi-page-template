### 多页面配置
```
  1.config/paths.js添加module
  2.entry入口添加自定义文件
  3.output修改bundle.js 改为 [name].bundle.js
  4.plugins补充new HtmlWebpackPlugin();
  注： 生成html文件依赖src/views下的文件夹， 且对应文件夹下必须要有index(.js|.jsx|.tsx|.ts)
```

### env环境配置 .env文件
```
GENERATE_SOURCEMAP = "false" // 关闭sourcemap
BUILD_PATH = "build" // 构建文件
```

```
react-template
├── config
├── node_modules
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── robots.txt
└── srcipts
    ├── build.js
    └── start.js
├── src
    ├── views // 生成多html文件，且对应文件夹下必须要有index(.js|.jsx|.tsx|.ts)
    ├── index.tsx // 主入口文件
    ├── react-app-env.d.ts
    ├── setupProxy.js // 代理
    └── react-app-env.d.ts
├── .babelrc
├── .editorconfig
├── .eslintignore
├── .eslintrc.json
├── .gitignore
├── package.json
├── README.md
└── tsconfig.json
```
