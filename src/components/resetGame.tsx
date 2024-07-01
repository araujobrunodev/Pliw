import CountText from "./countText"
import Button from "./button"
import { FC, useEffect, useState } from "react"
import "../styles/resetGame.css"

interface ResetGameProps {
    state: "won" | "lost",
    hidden: boolean
}

const ResetGame:FC<ResetGameProps> = ({
    state,
    hidden
}) => {
    let [warn,setWarn] = useState("")
    let [buttonMsg,setButtonMsg] = useState("")
    let [backgroundColor,setBackgroundColor] = useState("")

    const Changes = () => {
        if (state == "won") {
            setWarn("You win")
            setButtonMsg("Next match")
            setBackgroundColor("#002BFF")
        } else {
            setWarn("You lose")
            setButtonMsg("Play again")
            setBackgroundColor("#FF002B")
        }
    }

    useEffect(() => {
        Changes()
    },[state])
    
    return (
        <>
            {
                !hidden && 
                <div className="resetGame">
                    <div className="items" style={{backgroundColor: backgroundColor}}>
                        <p className="title_items">{warn}</p>
                        <CountText className="score" title="Score" value="0"/>
                        <Button className="reset_button" onClick={() => {}} title={buttonMsg}/>
                    </div>

                    <CountText className="level" title="Level" value="0"/>
                </div>
            }
        </>
    )
}

export default ResetGame