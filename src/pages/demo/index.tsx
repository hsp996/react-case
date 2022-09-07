import React,{useRef,useEffect} from 'react'
import {gsap} from "gsap";
import styles from './index.module.scss'

const Demo:React.FC = function () {
    const wrapRef = useRef(null)
    useEffect(()=>{
        (()=>{
            console.log(1)
            gsap.to(wrapRef.current,{
                x:200
            })
        })()
    },[])
    return <div className={styles.wrap} ref={wrapRef}>
    </div>
}


export  default Demo