import Countdown from "./countdown"
import "../styles/stopwatch.css"

function Stopwatch ()  {
    return (
        <div className="main_stopwatch">
            <Countdown className="time" value={30}/>
        </div>
    )
}

export default Stopwatch