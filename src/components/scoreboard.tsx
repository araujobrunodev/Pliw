import { FC } from "react"
import CountText from "./countText"
import Stopwatch from "./stopwatch"
import "../styles/scoreboard.css"

interface ScoreboardProps {
    hiddenLevel: boolean
}

const Scoreboard:FC<ScoreboardProps> = ({
    hiddenLevel
}) => {
    return (
        <div className="scoreboard">
            {
                hiddenLevel == true ? 
                <button className="arrow_button">
                    <img className="arrow" src="arrow_back.svg" alt="arrow"/>
                </button> :
                <CountText className="level" title="status" value="0"/>
            }

            <Stopwatch/>

            <CountText className="status" title="score" value="0"/>
        </div>
    )
}

export default Scoreboard