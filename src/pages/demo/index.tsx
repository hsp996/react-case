import React,{useRef,useEffect} from 'react'
import {gsap} from "gsap";
import styles from './index.module.scss'

const Demo:React.FC = function () {
    const wrapRef = useRef(null)
    useEffect(()=>{
        (()=>{
            gsap.to(wrapRef.current,{
                x:200,
                width:300,
                delay:gsap.utils.distribute({
                })
            })
        })()
    },[])
    return <div className={styles.wrap} ref={wrapRef}>
    </div>
}


export  default Demo