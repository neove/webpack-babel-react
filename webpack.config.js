var path = require("path");
var webpack = require('webpack')
var plugins = require('./webpack/plugins')
module.exports = {
  entry: "./src/index.js",//入口文件
  output: {
    filename: "bundle.js",
    chunkFilename: "[name].chunk.js",
    publicPath: "",//webpack-dev-server 也会默认从 publicPath 为基准，使用它来决定在哪个目录下启用服务，来访问 webpack 输出的文件。

    //_dirname:当前文件在系统的环境变量 eg: /Users/beisen/Documents/project/github/webpack-babel-react/"
    path: path.resolve(__dirname, "dist")
  },
  devServer: {
    port:'8800',//服务端口号
    // hot: true,// hot module replacement. Depends on HotModuleReplacementPlugin
    contentBase: __dirname + "/dist",
    // 开启服务后端口对应的静态文件地址,在该目录下添加index.html文件，并引入js文件 assets/bundle.js
    // proxy: { // proxy URLs to backend development server
    //   '//stnew03.beisen.com': 'http://localhost:3000'
    // },
  },
  //模块加载器配置
  module: {
    rules: [
      //babel-loader
      {
        test: /\.(js)$/,
        include: [
          path.resolve(__dirname, "src")
        ],
        exclude: [
          //这里应该写什么?
        ],
        loader: "babel-loader",
        options: {
          presets: [
            "es2015",
            "stage-0",
            "react"
          ]
        }
      },
      //css-loader
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      //scss-loader
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  externals : {
    'react':'react',
    'react-dom':'react-dom',
    'immutable':'immutable'
  },
  //webpack插件
  plugins:plugins
};
