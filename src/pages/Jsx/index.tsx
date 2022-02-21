import React from 'react'

const toLearn = [ 'react' , 'vue' , 'webpack' , 'nodejs'  ]

const TextComponent = ()=> <div> hello , i am function component </div>

class Index extends React.Component{
    status = false /* 状态 */
    renderFoot=()=> <div> i am foot</div>
    contentRender=()=>{
        const reactElement = (
            <div style={{ marginTop:'100px' }}   >
                { /* element 元素类型 */ }
                <div>hello,world</div>
                { /* fragment 类型 */ }
                <React.Fragment>
                    <div> 👽👽 </div>
                </React.Fragment>
                { /* text 文本类型 */ }
                my name is alien
                { /* 数组节点类型 */ }
                { toLearn.map(item=> <div key={item} >let us learn { item } </div> ) }
                { /* 组件类型 */ }
                <TextComponent/>
                { /* 三元运算 */  }
                { this.status ? <TextComponent /> : <div>三元运算</div> }
                { /* 函数执行 */ }
                { this.renderFoot() }
            </div>
        )
        const {children} = reactElement.props
        const flatChildren =  React.Children.toArray(children).map(element=>{
            if (React.isValidElement(element)){
                return  element
            }
        })
        const newElement = React.createElement('div',{key:'1'},'say goodbye!')
        flatChildren.push(newElement)
        return React.cloneElement(reactElement, {}, flatChildren)
    }
    render(){
        /* 以下都是常用的jsx元素节 */
        return  this.contentRender()
    }
}

export  default  Index