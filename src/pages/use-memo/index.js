import {useEffect, useMemo,useState} from "react";
import {useSelector,useDispatch} from "react-redux";

function Index (props){
    const dispatch = useDispatch()
    const num = useSelector((state => {
        return state.number
    }))
    const [count, setCount] = useState(0)
    const one = useMemo(()=>{
        console.log('useMemo')
        return 1
    },[])
    console.log(one)
    useEffect(()=>{
        console.log(1)
    })
    return (
        <>
            <div>{num}</div>
            <p>{count} - {one}</p>
            <button onClick={()=>{setCount(count+1)}}>点击</button>
        </>
    )
}

export default Index