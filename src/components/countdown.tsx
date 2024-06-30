import { FC } from "react"
import "../styles/countdown.css"

interface CountdownProp {
    value: number 
}

const Countdown:FC<CountdownProp> = ({
    value
}) => {
    return (
        <h1 className="countdown">{value}</h1>
    )
}

export default Countdown