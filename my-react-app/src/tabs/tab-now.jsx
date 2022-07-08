import {
  nowTabActive,
  detailsTabActive,
  forecastTabActive,
} from "./tab-container";
import { useDispatch } from "react-redux/es/exports";
import { toggleCity } from "../../Redux/action";

export function TabNow(props) {
  const { isActive, currentCity, info } = props;
  const dispatch = useDispatch();

  if (info && isActive) {
    const iconUrl = `http://openweathermap.org/img/wn/${info.weather[0].icon}@4x.png`;

    return (
      <div className="box">
        <div>
          <span>{info.name}</span>
        </div>
        <div>
          <img src={iconUrl} alt="cloud" />
        </div>
        <div>
          <p>{info.main.temp}°</p>
          <button
            onClick={() => dispatch(toggleCity(currentCity))}
            type="button"
          >
            Like
          </button>
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export function TabSwitcher(props) {
  const { onSwitch } = props;

  return (
    <div className="box">
      <button onClick={() => onSwitch(nowTabActive)}>Now</button>
      <button onClick={() => onSwitch(detailsTabActive)}>Details</button>
      <button onClick={() => onSwitch(forecastTabActive)}>Forecast</button>
    </div>
  );
}
