import { NavMenu } from "./NavMenu"
import { useSelector } from "react-redux"


export function StatsPage() {
const citiesAmount = useSelector(state => Object.keys(state.userStats).length)
const mostVeiwedCity = useSelector(state => {
    Object.entries(state.userStats)
    .reduce((acc, item) => {
      acc[1] > item[1] ? acc : item, ["default", 0]
    });
})
    return (
        <div>
          <NavMenu />
          <h1>STATS</h1>
          <ul>
            <li>Most Viewed City: {mostVeiwedCity}</li>
            <li>Viewed Cities Amount: {citiesAmount} </li>
          </ul>
        </div>
    )
}