import { FC, useEffect, useState } from "react"
import "../styles/PliwBall.css"

interface PliwBallProps {
    effect: () => void,
    type: 1 | 2 | 3 | 4 | 5 | 6 | 7,
    positionX: number,
    positionY: number,
    canDisapear: boolean
}
const PliwBall: FC<PliwBallProps> = ({
    effect,
    type,
    positionX,
    positionY,
    canDisapear
}) => {
    let [source, setSource] = useState("")
    let [sourceName, setSourceName] = useState("")
    let [opacity, setOpacity] = useState(100)

    useEffect(() => {
        switch (type) {
            case 1:
                setSource("/PliwBall 1.png")
                setSourceName("PliwBall 1")
                break
    
            case 2:
                setSource("/PliwBall 2.png")
                setSourceName("PliwBall 2")
                break
    
            case 3:
                setSource("/PliwBall 3.png")
                setSourceName("PliwBall 3")
                break
    
            case 4:
                setSource("/PliwBall 4.png")
                setSourceName("PliwBall 4")
                break
    
            case 5:
                setSource("/PliwBall 5.png")
                setSourceName("PliwBall 5")
                break
    
            case 6:
                setSource("/PliwBall 6.png")
                setSourceName("PliwBall 6")
                break
    
            case 7:
                setSource("/PliwBall 7.png")
                setSourceName("PliwBall 7")
                break
        }
    },[])

    useEffect(() => {
        if (!canDisapear) return;

        let time = setTimeout(() => {
            if (opacity == 35) setOpacity(100)
            else setOpacity(35)
        console.log("fd")
        }, 600)

        return () => clearTimeout(time)
    },[opacity])

    return (
        <div className="pliwBall" onClick={effect} style={{top: `${positionY}px`, left: `${positionX}px`, opacity: `${opacity}%`}}>
            <img className="pliwBall_item" src={source} alt={sourceName} />
        </div>
    )
}

export default PliwBall