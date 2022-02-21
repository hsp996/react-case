import React,{useRef,useEffect,useState} from 'react'
function ClickHoc (Component){
    return  function (props){
        const dom = useRef(null)
        useEffect(()=>{
            const handerClick = () => console.log('发生点击事件')
            dom.current.addEventListener('click',handerClick)
        },[])
        return  <div ref={dom}><Component  {...props} /></div>
    }
}

@ClickHoc
class Index extends React.Component{
    componentDidUpdate(){
        console.log('update')
    }
    componentWillUnmount() {
        console.log('unmount')
    }

    render(){
        return <div className='index'  >
            <p>hello，world</p>
            <button>组件内部点击</button>
        </div>
    }
}

export default ()=>{
    const [num, setNum] = useState(0)
    return <div className='box'>
        <Index/>
        <button onClick={()=>setNum(num+1)}>组件外部点击:{num}</button>
    </div>
}
