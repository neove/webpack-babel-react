var path = require("path");

module.exports = {
  entry: "./src/index.js",
  //入口文件
  output: {
    filename: "bundle.js",
    chunkFilename: "[name].chunk.js",
    publicPath: "/assets/",
    //_dirname:当前文件在系统的环境变量 eg: /Users/beisen/Documents/project/github/webpack-babel-react/"
    path: path.resolve(__dirname, "dist")
  },
  devServer: {
    port:'8800',//服务端口号
    contentBase: __dirname + "/dist",
    // 开启服务后端口对应的静态文件地址,在该目录下添加index.html文件，并引入js文件 assets/bundle.js
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        include: [
          path.resolve(__dirname, "src")
        ],
        loader: "babel-loader",
        options: {
          presets: [
            "es2015",
            "stage-0",
            "react"
          ]
        }
      }
    ]
  }
};
