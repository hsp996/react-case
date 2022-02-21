import {useEffect} from "react";
import {rootHistory} from "../components/router";

export default  function useListen(cb){
    useEffect(()=>{
        if (!rootHistory) return ()=>{}
        const unlisten = rootHistory.listen((location)=>{
            cb && cb(location)
        })
        return function (){
            unlisten && unlisten()
        }
    },[])
}