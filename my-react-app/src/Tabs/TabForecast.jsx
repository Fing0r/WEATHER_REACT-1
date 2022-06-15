import { useState, useEffect } from 'react'
import { GET_URL } from '../js/response';


export function TabForecast(props) {
    const {currentCity, isActive} = props
    const [cityData, setCityData] = useState('')
  
    useEffect(() => {
      const url = GET_URL.FORECAST(currentCity)
      
      try {
        fetch(url)
        .then(response => response.json())
        .then(result => setCityData(result))
      } catch(e) {
        console.log(e.name)
      }

    }, [currentCity])
  
    if(cityData && isActive) {
      return (
        <div className='forecast box'>
          <p>{cityData.city.name}</p>
          <ForecastList data={cityData.list} />
        </div>
      )
    } else {
      return null;
    }
  }

  function ForecastList(props) {
    const {data} = props 
    const list = data.map(item => 
      <ForecastItem key={item.dt}  info={item} />
    );

      return (
        <ul>
          {list}
        </ul>
      )
  
  }

  function ForecastItem(props) {
    const {info} = props;

    const iconURL = `http://openweathermap.org/img/wn/${info.weather[0].icon}.png`
    return(
      <li>
        <div>
            <div>
              <p></p>
              <p>12:00</p>
            </div>
            <div>
              <p>Temperature: <span>{info.main.temp}</span></p>
              <p>{info.weather[0].main}</p>
            </div>
            <div>
              <p>Feels like: <span>{info.main.feels_like}</span></p>
              <img src={iconURL} alt="" />
            </div>
        </div>
      </li>
    )
  }