import { format } from "date-fns";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchForecast } from "../../Redux/action";

export function TabForecast(props) {
  const { currentCity, isActive } = props;
  const info = useSelector((state) => state.weather.forecast);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchForecast(currentCity));
  }, []);

  if (info && isActive) {
    return (
      <div className="forecast box">
        <p>{info.name}</p>
        <ForecastList data={info.list} />
      </div>
    );
  } else {
    return null;
  }
}

function ForecastList(props) {
  const { data } = props;
  const list = data.map((item) => <ForecastItem key={item.dt} info={item} />);

  return <ul>{list}</ul>;
}

function ForecastItem(props) {
  const { info } = props;
  console.log(info);
  const iconURL = `http://openweathermap.org/img/wn/${info.weather[0].icon}.png`;
  return (
    <li>
      <div>
        <div>
          <p></p>
          <p>{format(info.dt, "HH:mm")}</p>
        </div>
        <div>
          <p>
            Temperature: <span>{info.main.temp}</span>
          </p>
          <p>{info.weather[0].main}</p>
        </div>
        <div>
          <p>
            Feels like: <span>{info.main.feels_like}</span>
          </p>
          <img src={iconURL} alt="" />
        </div>
      </div>
    </li>
  );
}
