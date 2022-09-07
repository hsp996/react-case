import React from 'react'
import AsyncComponent from "../../hoc/asyncComponent";
/* 数据模拟 */
const getData=()=>{
    return new Promise((resolve)=>{
        //模拟异步
        setTimeout(() => {
            resolve({
                name:'alien',
                say:'let us learn React!'
            })
        }, 1000)
    })
}

/* 测试异步组件 */
// @ts-ignore
function Test({ rdata  , age}){
    const { name , say } = rdata
    console.log('组件渲染')
    return <div>
        <div> hello , my name is { name } </div>
        <div>age : { age } </div>
        <div> i want to say { say } </div>
    </div>
}
/* 父组件 */
export default class Demo extends React.Component{
    LazyTest = AsyncComponent(Test,getData) /* 需要每一次在组件内部声明，保证每次父组件挂载，都会重新请求数据 ，防止内存泄漏。 */
    state = {
        num:1
    }
    handleClick = ()=>{
        this.setState({
            num: this.state.num+2
        },()=>{
            console.log('1111')
        })
        this.setState({
            num: this.state.num+1
        },()=>{
            console.log('2222')
        })
    }
    render(){
        const { LazyTest } = this
        return <div>
            {this.state.num}
            <React.Suspense fallback={<div>loading...</div>} >
                <LazyTest age={18}  />
            </React.Suspense>
            <button onClick={this.handleClick}>setState</button>
        </div>
    }
}



