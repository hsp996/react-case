import React, {useEffect, useRef} from 'react'
class Index extends React.Component{
    state ={
        num :0
    }
    node = null
    getDom=(node)=>{
        console.log(node)
        this.node = node
    }
    render() {
        return <div ref={this.getDom}>
            <p>{this.state.num}</p>
            <button onClick={()=>this.setState({num:this.state.num + 1})}>点击</button>
        </div>
    }
}

export default Index