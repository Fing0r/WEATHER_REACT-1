import React from 'react'
import { useState, useEffect } from 'react'
import { SavedCities } from './SavedCities'
import { TabContainer } from './TabContainer'

const savedCitiesStorage = JSON.parse(localStorage.getItem('savedCities'))
const currentCityStorage = localStorage.getItem('cityName')

export function MainContainer() {
  const [savedCities, setSavedCities] = useState(savedCitiesStorage || []);
  const [cityName, setCityName] = useState(currentCityStorage || 'london')

  useEffect(() => {
    const savedCitiesJSON = JSON.stringify(savedCities)
    localStorage.setItem('savedCities', savedCitiesJSON)
  },[savedCities])

  function toggleSavedCity() {
    const currentCity = {
      name: cityName,
      key: Date.now()
    };
    const isDublicate = savedCities.find(item => item.name === cityName)

    if(isDublicate) {
      const removeCity = savedCities.filter(item => item.name !== cityName);
      setSavedCities(removeCity)
    } else {
      setSavedCities(savedCities.concat(currentCity))
    }
  }

  function showSavedCity(e) {
    const target = e.target
    setCityName(target.textContent)
  }

    return (
    <div className='main__container'>
      <div className='box'>
        <TabContainer 
        onLikeClick={toggleSavedCity} />
      </div>
      <div className='box'>
        <SavedCities 
        onItemClick={showSavedCity} 
        currentCity={cityName} 
        list={savedCities} />
      </div>
    </div>
    )
}