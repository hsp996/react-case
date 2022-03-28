import {useEffect, useMemo,useState} from "react";
import {useSelector,useDispatch} from "react-redux";



function View(props) {
    const [data, setData] = useState('')
    useEffect(()=>{

    },[])
    return <div>
        {props.num}
    </div>
}

function Index (props){
    const dispatch = useDispatch()
    const num = useSelector((state => {
        return state.number
    }))
    const [count, setCount] = useState(0)
    return (
        <>
            <div>{num}</div>
            <button onClick={()=>{setCount(count+1)}}>点击</button>
            {useMemo(()=><View num={100}/>,[])}
        </>
    )
}

export default Index