import {useState} from "react";
import {gsap} from 'gsap'
import styles from './index.module.scss'
const GreenSock= function (){
    const carArr = Array.from({length:100})
    const [count,setCount]=useState(0)
    const gridSize = 10
    const onNext = function (){
        let newCount = count + 1
        setCount(newCount)
        gsap.to(document.querySelectorAll('.greensock_card__3utAc'),{
            '--count': newCount,
            delay: gsap.utils.distribute({
                from: [5 / gridSize, 5 / gridSize],
                amount: gridSize / 20,
                base: 0,
                grid: [gridSize, gridSize],
                ease: 'power1.inOut',
            }),
            duration: 0.1,
        })
    }
    return <div className={styles.container}>
        {
            carArr.map((item,index)=>{
                const x = index % 10
                const y = Math.floor(index /10)
                return (
                    <div className={styles.card} onClick={onNext}>
                        {/*@ts-ignore*/}
                        <span className={styles.card_front} style={{'--x':x,'--y':y}}></span>
                        {/*@ts-ignore*/}
                        <span className={styles.card_rear} style={{'--x':x,'--y':y}}></span>
                    </div>
                )
            })
        }

    </div>
}

export default GreenSock