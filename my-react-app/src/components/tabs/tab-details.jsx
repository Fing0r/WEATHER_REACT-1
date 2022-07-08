import format from "date-fns/format";

export function TabDetails(props) {
  const { isActive, info } = props;

  if (info && isActive) {
    return (
      <div className="box">
        <p>{info.name}</p>
        <ul>
          <li>
            Temperature: <span>{info.main.temp}</span>
          </li>
          <li>
            Feels like: <span>{info.main.feels_like}</span>
          </li>
          <li>
            Weather: <span>{info.weather[0].main}</span>
          </li>
          <li>
            Sunrise: <span>{format(info.sys.sunrise, "HH:mm")}</span>
          </li>
          <li>
            Sunset: <span>{format(info.sys.sunset, "HH:mm")}</span>
          </li>
        </ul>
      </div>
    );
  } else {
    return null;
  }
}
