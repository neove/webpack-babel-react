var path = require("path");
debugger
module.exports = {
  entry: ['./src/index.js'] , //入口文件
  output: {
      filename: 'bundle.js',
      chunkFilename:'[name].chunk.js',
      publicPath:'./dist/',
      path:path.resolve(__dirname,'dist'),//_dirname:当前文件在系统的环境变量 eg: /Users/beisen/Documents/project/github/webpack-babel-react/"
  }
};
