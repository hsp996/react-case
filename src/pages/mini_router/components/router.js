import React, {useCallback, useEffect, useState, useContext, useMemo, createContext} from "react";
import { createBrowserHistory as createHistory  } from 'history'

export const RouterContext = createContext(null)
export let rootHistory = null

export default function Router(props){
    const history = useMemo(()=>{
        rootHistory =  createHistory()
        return rootHistory
    },[])
    const [location, setLocation] = useState(history.location)
    useEffect(()=>{
        const unlisted = history.listen((location)=>{
            setLocation((location))
        })
        return function (){
            unlisted && unlisted()
        }
    })
    return <RouterContext.Provider value={{
        location, // 当前状态下的路由信息
        history, // 保存了改变路由的方法和监听路由的方法
        match:{path:'/',url:'/',params:{}} // 证明当前路由的匹配信息的对象
    }}>

    </RouterContext.Provider>
}
