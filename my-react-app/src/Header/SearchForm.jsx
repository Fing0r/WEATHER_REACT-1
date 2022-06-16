import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { setCurrentCity } from '../Redux/action';

export function SearchForm() {
  const [formValue, setFormValue] = useState('')
  const dispatch = useDispatch()

  async function isCityExist(value) {
    const serverUrl = 'http://api.openweathermap.org/data/2.5/weather';
    const apiKey = '876cf39fa6cd1bdda202ce044015d0e5';
    const cityName = value
    const url =  `${serverUrl}?q=${cityName}&appid=${apiKey}&units=metric`;

    const response = await fetch(url)
    
    response.ok ? dispatch(setCurrentCity(value)) : dispatch(setCurrentCity(''));
  }
  
    function saveCity(event) {
      const inputValue = event.target.value;
      setFormValue(inputValue)
    }
    
    return (
      <div >
        <form onSubmit={(e) => {
          e.preventDefault()
          isCityExist(formValue)
          setFormValue('')
          }}>
          <input type="search" placeholder="name of city" value={formValue} onChange={saveCity}/>
          <button type="submit">search</button>
        </form>
      </div>
    )
  }
  