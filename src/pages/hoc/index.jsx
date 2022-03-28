import React,{useRef,useEffect,useState} from 'react'
function ClickHoc (Component){
    function HOC (props){
        const dom = useRef(null)
        useEffect(()=>{
            const handlerClick = () => console.log('发生点击事件')
            dom.current.addEventListener('click',handlerClick)
        },[])
        return  <div ref={dom}>
            <Component ref={props.forwardRef}  {...props} />
        </div>
    }
    // 获取 原先组件ref
    return React.forwardRef(((props, ref) => <HOC forwardRef={ref} {...props} />))
}

@ClickHoc
class Index extends React.Component{
    add=(a,b)=>{
        return a + b
    }
    render(){
        return <div className='index' >
            <p>hello，world</p>
            <button>组件内部点击</button>
        </div>
    }
}

export default ()=>{
    const currentDom = React.useRef(null)
    const [num, setNum] = useState(0)
    function onAdd(){
        console.log(currentDom.current.add(2,3))
    }
    return <div className='box'>
        <Index ref={currentDom} />
        <button onClick={onAdd}>组件外部点击:{num}</button>
    </div>
}
