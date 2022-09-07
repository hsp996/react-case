import React,{useRef} from 'react'
import {gsap} from "gsap";
import styles from './index.module.scss'

const Demo:React.FC = function () {
    const wrapRef = useRef(null)
    return <div className={styles.wrap} ref={wrapRef}>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
    </div>
}


export  default Demo