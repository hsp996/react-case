import React,{useRef,useState,useContext,useCallback,useEffect}  from 'react'

// 同步 state
export function useAsyncState(defaultValue){
    const value = useRef(defaultValue)        /* useRef 用于保存状态 */
    const [ ,forceUpdate ] = useState(null)   /* useState 用于更新组件 */
    const dispatch = (fn) => {                      /* 模拟一个更新函数 */
        let newValue
        if( typeof fn === 'function' ){
            newValue = fn(value.current)           /* 当参数为函数的情况 */
        }else{
            newValue = fn                           /* 当参数为其他的情况 */
        }
        value.current = newValue
        forceUpdate({})                             /* 强制更新 */
    }
    return [  value , dispatch  ]                   /* 返回和 useState 一样的格式 */
}

export function useEffectProps(value,cb){
    const isMounted = React.useRef(false)
    React.useEffect(()=>{
        /* 防止第一次执行 */
        isMounted.current && cb && cb()
    },[ value ])
    React.useEffect(()=>{
        /* 第一次挂载 */
        isMounted.current = true
    },[])
}

export function useLog(context){
    const message = useContext(context)
    const listenDOM = useRef(null)

    const reportMessage = useCallback(function (data,type){
        if (type === 'pv'){
            console.log('pv', message)
        }else if (type === 'click'){
            console.log('组件click', message ,data)
        }
    },[message])

    useEffect(()=>{
        const handleClick = function (e){
            reportMessage(e.target,'click')
        }
        if (listenDOM.current){
            listenDOM.current.addEventListener('click', handleClick)
        }
        return function (){
            listenDOM.current && listenDOM.current.removeEventListener('click',handleClick)
        }
    },[reportMessage])

    return [listenDOM, reportMessage]
}

