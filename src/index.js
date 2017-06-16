/*import react,{Component} from 'react'
export default class Demo extends Component{
  render(){
    return <div>
      this is a demo project 
    </div>
  }
}*/
// import './index.css'
// import a from './entry.js'
// document.write(a)
import asyncModule  from './entry.js';
require.ensure([],(a)=>{
  asyncModule.then(a => document.write(a));
})