import { FC } from "react"

interface ButtonProps {
    title: string,
    onClick: (a:any) => void,
    className: string
}

const Button:FC<ButtonProps> = ({
    onClick,
    title,
    className
}) => {
    return (
        <button className={className} onClick={onClick}>
            {title}
        </button>
    )
}

export default Button