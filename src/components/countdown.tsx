import { FC, useEffect, useState } from "react"
import "../styles/countdown.css"

interface CountdownProps {
    hidden: boolean,
}

const Countdown:FC<CountdownProps> = ({
    hidden
}) => {
    let [count, setCount] = useState(3)
    let [active, setActive] = useState(hidden)

    useEffect(() => {
        if (count == 0) {
            setCount(3)
            return setActive(false)
        } 

        let time = setTimeout(() => {
            setCount(--count)
        }, 500)

        return () => clearTimeout(time)
    },[count])

    return (
        <>
            { active && 
                <h1 className="countdown">
                    {count}
                </h1>
            }
        </>
    )
}

export default Countdown