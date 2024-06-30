import CountText from "./countText"
import "../styles/statistic.css"

function Statistic () {
    return (
        <div className="main_stat">
            <CountText className="item_stat" title="Current score" value=""/>
            <CountText className="item_stat" title="Best score" value=""/>
            <CountText className="item_stat" title="All clicks" value=""/>
            <CountText className="item_stat" title="All the deaths" value=""/>
        </div>
    )
}

export default Statistic