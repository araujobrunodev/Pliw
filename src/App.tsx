import CountText from "./components/countText"
import Statistic from "./components/statistic"
import Countdown from "./components/countdown"
import "./styles/app.css"
import { useState } from "react"
import Button from "./components/button"

function App() {
  return (
    <>
      <Countdown className="countdown" value={3}/>
      <Button className="" onClick={() => {}} title="Play"/>
    </>
  )
}

export default App
