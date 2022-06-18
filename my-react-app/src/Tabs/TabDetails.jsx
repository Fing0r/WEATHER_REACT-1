import { useState, useEffect } from 'react'
import { GET_URL } from '../js/response';
import format from 'date-fns/format';


export function TabDetails(props) {
    const {currentCity, isActive} = props;
    const [city, setCity] = useState('')
  
    useEffect(() => {
      const url = GET_URL.MAIN(currentCity)
      
      try {
        fetch(url)
        .then((response => response.json()))
        .then((result) => setCity(result))
      } catch(e) {
        console.log(e.name)
      }
  
    }, [currentCity])
    if(city && isActive) {
      return (
        <div className='box'>
          <p>{city.name}</p>
          <ul>
            <li>Temperature: <span>{city.main.temp}</span></li>
            <li>Feels like: <span>{city.main.feels_like}</span></li>
            <li>Weather: <span>{city.weather[0].main}</span></li>
            <li>Sunrise: <span>{format(city.sys.sunrise, 'HH:mm')}</span></li>
            <li>Sunset: <span>{format(city.sys.sunset, 'HH:mm')}</span></li>
          </ul>
        </div>
      )
    } else {
      return null;
    }
  
  }
