import CountText from "./components/countText"
import Statistic from "./components/statistic"
import Countdown from "./components/countdown"
import "./styles/app.css"
import { useState } from "react"

function App() {
  let [hide, setHide] = useState(false)

  return (
    <>
      <Countdown hidden={hide}/>
    </>
  )
}

export default App
