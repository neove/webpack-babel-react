
require.ensure([],(a)=>{
  let {asyncModule} = require('./entry.js');//require 问题
  asyncModule.then(a => console.log(a,'asdddfff'));
},'component')//第三个参数component 为当前这个模块命名，结合webpack.config.js 可以为打包出来的chunk命名