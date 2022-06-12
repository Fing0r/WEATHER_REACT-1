import { useState } from 'react'

export function SearchForm(props) {
    const [currentCity, setCurrentCity] = useState('')
  
    function saveCity(event) {
      const inputValue = event.target.value;
      setCurrentCity(inputValue)
    }
    
    return (
      <div >
        <form>
          <input type="search" placeholder="name of city" onChange={saveCity}/>
          <button onClick={() => props.onFormSubmit(currentCity)} type="button">search</button>
        </form>
      </div>
    )
  }
  