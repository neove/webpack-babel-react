
require.ensure([],(a)=>{
  let {asyncModule} = require('./entry.js');//require 问题
  asyncModule.then(a => document.write(a));
})