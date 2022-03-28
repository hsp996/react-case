import React from 'react'
import style from './index.module.less'

function getColor(){
    const r = Math.floor(Math.random()*255)
    const g = Math.floor(Math.random()*255)
    const b = Math.floor(Math.random()*255)
    return `rgba(${r},${g},${b},0.8)`
}

function getPosition(position: { width: number; height: number }){
    const {width,height} = position
    return {left:Math.ceil(Math.random()*width),top:Math.ceil(Math.random()*height)}
}

// @ts-ignore
function Circle({position}){
    const sty = React.useMemo(()=>{
            return {
                background: getColor(),
                ...getPosition(position)
            }
    },[])
    return (
        <div style={sty} className={style.circle} />
    )
}