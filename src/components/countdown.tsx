import { FC, useEffect, useState } from "react"
import "../styles/countdown.css"

interface CountdownProps {
    value: number,
    className: string
}

const Countdown:FC<CountdownProps> = ({
    value,
    className
}) => {
    let [count, setCount] = useState(value)
    let [active, setActive] = useState(true)

    useEffect(() => {
        let time = setTimeout(() => {
            if (count != 0) setCount(--count)
        }, 500)

        return () => clearTimeout(time)
    },[count])

    return (
        <>
            { active && 
                <h1 className={className}>
                    {count}
                </h1>
            }
        </>
    )
}

export default Countdown