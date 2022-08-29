import  React,{useEffect,useRef,useState} from 'react'
import style from './index.module.css'

// 虚拟滚动
const VirtualList=()=> {
    const [dataList, setDataList] = useState([])
    const box = useRef(null)
    const content = useRef(null)
    const [position, setPosition] = useState([0,0]) // 缓冲区 + 视图区索引
    const scrollInfo = useRef({
        height:null,
        itemHeight:60,
        bufferCount:2, // 缓冲区个数
        renderCount:null // 渲染区个数
    })
    useEffect(()=>{
        const height = box.current?.offsetHeight
        const {itemHeight,bufferCount} = scrollInfo.current
        const renderCount = Math.ceil( height / itemHeight) + bufferCount
        scrollInfo.current = {height,itemHeight,bufferCount,renderCount}
        const dataList = new Array(1000).fill(1).map((item,index)=> index + 1)
        setDataList(dataList)
        setPosition([0,renderCount])
    },[])
    const handleScroll= () =>{
        const {scrollTop} = box.current
        const {itemHeight,renderCount} = scrollInfo.current
        const currentOffset = scrollTop - scrollTop % itemHeight
        content.current.style = `transform: translateY(${currentOffset}px)`
        const start = Math.floor(scrollTop / itemHeight)
        const end = Math.floor(scrollTop / itemHeight + renderCount + 1)
        if (position[0] !== start || position[1] !== end){
            // setPosition([start,end])
        }
    }
    const [start,end] = position
    const renderList = dataList.slice(start,end)
    return (
        <div className={style.list_box} ref={box} onScroll={handleScroll}>
            <div ref={content} >
                {
                    renderList.map((item,index)=><div key={index} className={style.list_item}>item {item}</div>)
                }
            </div>
        </div>
    )
}

export default VirtualList