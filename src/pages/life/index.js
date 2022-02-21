import React, {useEffect,useState} from 'react';

class Life extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            num:0
        }
        this.addNum = this.addNum.bind(this)
    }
    node = null
    addNum(){
        this.setState({
            num: this.state.num + 1
        })
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate')
        console.log(prevProps)
        console.log(prevState)
        console.log('getSnapshotBeforeUpdate')
        return this.node.scrollHeight
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        // console.log('snapshot', snapshot)
    }
    // shouldComponentUpdate(nextProps, nextState, nextContext) {
    //     console.log('nextProps', nextProps)
    //     console.log('nextState', nextState)
    //     console.log('nexContent', nextContext)
    //     if (nextState.num === 1) return false
    //     return true
    // }
    static getDerivedStateFromProps(nextProps,preState) {
        console.log(nextProps)
        console.log(preState)
    }
    render() {
        return(
            <div ref={node=>this.node = node}>
                <div>props:{this.props.number}</div>
                <div>states:{this.state.num}</div>
                <button onClick={this.addNum}>改变state</button>
            </div>
        )
    }
}

export default ()=>{
    const [number, setNumber] = useState(0)
    const [isRender, setIsRender] = useState(true)
    return (
        <div>
            {isRender && <Life number={number}/>}
            <button onClick={()=>setNumber(state=>state+1)}>改变props</button>
            <button onClick={()=>setIsRender(false)}>卸载组件</button>
        </div>
    )
};