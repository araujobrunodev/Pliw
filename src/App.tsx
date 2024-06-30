import CountText from "./components/countText"
import Statistic from "./components/statistic"
import Countdown from "./components/countdown"
import "./styles/app.css"
import { useState } from "react"
import Button from "./components/button"
import Stopwatch from "./components/stopwatch"
import Scoreboard from "./components/scoreboard"

function App() {
  return (
    <>
      <Scoreboard hiddenLevel={false}/>
    </>
  )
}

export default App
