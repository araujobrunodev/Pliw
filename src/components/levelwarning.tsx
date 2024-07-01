import { FC } from "react"
import CountText from "./countText"
import "../styles/levelWarning.css"

interface LevelWarningProps {
    overcome: number
}

const LevelWarning:FC<LevelWarningProps> = ({overcome}) => {
    return (
        <div className="levelWarning">
            <p className="levelWarning_p">Exceed {overcome} in the score</p>
            <CountText className="level" title="Level" value="0"/>
        </div>
    )
}

export default LevelWarning