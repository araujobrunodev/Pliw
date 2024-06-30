import { FC } from "react"

interface CountTextProps {
    className: string,
    value: string,
    title: string
}

const CountText:FC<CountTextProps> = ({
    className,
    value,
    title
}) => {
    return (
        <p className={className}>
            {`${title}: ${value}`}
        </p>
    )
}

export default CountText