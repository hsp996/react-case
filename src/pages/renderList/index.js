import React,{useState} from 'react'
import IndexStyle from './index.module.css'

function getColor(){
    const r = Math.random()*255
    const g = Math.random()*255
    const b = Math.random()*255
    return `rgba(${r},${g},${b},0.8)`
}
function getPosition(position){
    const {width,height} = position
    return {
        left: Math.ceil(Math.random() * width),
        top: Math.ceil(Math.random() * height)
    }
}

function SetCir(props){
    const {position} = props
    const style = React.useMemo(()=>{
        return {
            background:getColor(),
            ...getPosition(position)
        }
    },[])
    return (
        <div style={style} className={IndexStyle.cir}>
        </div>
    )
}

class Index extends React.Component{
    box = React.createRef(null)
    state={
        dataList:[],
        position:null,
        eachRenderNum:500,
        renderList:[],
        renderNewList:[]
    }
    componentDidMount() {
        const {offsetWidth,offsetHeight} = this.box.current
        const dataList = new Array(20000).fill(1)
        const times = Math.ceil(dataList.length/this.state.eachRenderNum)
        let index = 1
        this.setState({
            dataList:dataList,
            position:{
                width:offsetWidth,
                height:offsetHeight
            }
        },()=>{
            this.toRenderList(index,times)
        })
    }
    toRenderList=(index,times)=>{
        if (index > times ) return
        const {renderList} = this.state
        /* 通过缓存element把所有渲染完成的list缓存下来，下一次更新，直接跳过渲染 */
        renderList.push(this.renderNewList(index))
        this.setState({
            renderList
        })
        /* 用 requestIdleCallback 代替 setTimeout 浏览器空闲执行下一批渲染 */
        setTimeout(()=>{
            this.toRenderList(++index,times)
        },0)
    }
    renderNewList=(index)=>{
        const {dataList,eachRenderNum,position} = this.state
        const list = dataList.slice((index-1) * eachRenderNum , index * eachRenderNum)
        return (
            <React.Fragment key={index}>
                {
                    list.map((item,index)=><SetCir key={index} position={position} />)
                }
            </React.Fragment>
        )
    }
    render() {
        return (
            <div ref={this.box} style={{height:'1000px'}}>
                {
                    this.state.renderList
                }
            </div>
        )
    }
}

export default ()=>{
    const [btnShow, setBtnShow] = useState(true)
    const [contentShow, setContentShow] = useState(false)
    const handleClick=()=>{
        setBtnShow(false)
        setContentShow(true)
    }
    return (
        <div>
            <button>setState</button>
            {
                btnShow && <button type="submit" onClick={handleClick}>显示</button>
            }
            {
                contentShow && <Index/>
            }
        </div>
    )
}

