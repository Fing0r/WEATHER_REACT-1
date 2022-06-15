import { useState, useEffect } from 'react'
import { nowTabActive, detailsTabActive, forecastTabActive } from './TabContainer';
import { GET_URL } from '../js/response';
import { useSelector, useDispatch } from 'react-redux/es/exports'
import { toggleCity } from '../Redux/action'


export function TabNow(props) {
    const {isActive} = props;

    const [cityInfo, setCityInfo] = useState('')
    
    const currentCity = useSelector(state => state.currentCity)
    const dispatch = useDispatch()

    useEffect(() => {
      const url = GET_URL.MAIN(currentCity);
    try {
      fetch(url)
      .then((response => response.json()))
      .then((result) => setCityInfo(result))
    } catch(e) {
      console.log(e.name)
    }
  
    }, [currentCity])
  
    if (cityInfo && isActive) {
      const iconUrl = `http://openweathermap.org/img/wn/${cityInfo.weather[0].icon}@4x.png`;
  
      return (
        <div className='box'>
          <div>
            <span>{cityInfo.name}</span>
          </div>
          <div>
            <img src={iconUrl} alt="cloud" />
          </div>
          <div>
            <p>{cityInfo.main.temp}°</p>
            <button onClick={() => dispatch(toggleCity(currentCity))} type="button">Like</button>
          </div>
        </div>
      )
    } else {
      return null;
    }
  }


  

export function TabSwitcher(props) {
const {onSwitch} = props

    return(
      <div className='box'>
        <button onClick={() => onSwitch(nowTabActive)}>Now</button>
        <button onClick={() => onSwitch(detailsTabActive)}>Details</button>
        <button onClick={() => onSwitch(forecastTabActive)}>Forecast</button>
      </div>
    )
  }