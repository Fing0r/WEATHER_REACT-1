 import { CityContext } from "../js/context";
 import { useDispatch, useSelector } from "react-redux";
 import { setCurrentCity } from '../Redux/action'
 import { useEffect } from "react";
 
 function SavedCitiesItem(props) {
    const {name} = props
    return (
      <CityContext.Consumer>
        {value => (
          <li className={name === value ? 'selected' : null}>{name}</li>
        )}
      </CityContext.Consumer>
    )
  }
  
export  function SavedCities(props) {
    const list = useSelector(state => state.savedCities)
    const dispatch = useDispatch()

    useEffect(() => {
      const listJSON = JSON.stringify(list)
      localStorage.setItem('savedCities', listJSON)
    },[list])

    function showSavedCity(e) {
      if(e.target.tagName === 'LI') {
        const cityName = e.target.textContent
        dispatch(setCurrentCity(cityName))
        localStorage.setItem('cityName', cityName)
      }
    }

    const currentList = list.map(item => 
      <SavedCitiesItem  
      name={item.name} 
      key={item.key}/>
    )
  
    return (
      <div>
          <div>Added Locations:</div>
          <ul onClick={showSavedCity}>
            {currentList}
          </ul>
        </div>
    )
  }