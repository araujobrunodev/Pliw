import CountText from "./components/countText"
import Statistic from "./components/statistic"
import Countdown from "./components/countdown"
import "./styles/app.css"
import { useState } from "react"
import Button from "./components/button"
import Stopwatch from "./components/stopwatch"
import Scoreboard from "./components/scoreboard"
import LevelWarning from "./components/levelwarning"
import ResetGame from "./components/resetGame"
import PliwBall from "./components/pliwBall"

function App() {
  return (
    <>
      <PliwBall canDisapear={true} effect={() => {}} type={7} positionX={80} positionY={20}/>
    </>
  )
}

export default App
