import React from 'react'
import ReactDOM from 'react-dom/client'
import { useState, useEffect } from 'react'
import { SavedCities } from './SavedCities'
import { TabContainer } from './TabContainer'
import { SearchForm } from './SearchForm'
import { CityContext } from './context'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))

const currentCityStorage = localStorage.getItem('cityName')
const savedCitiesStorage = JSON.parse(localStorage.getItem('savedCities'))



function App() {
  
  const [cityName, setCityName] = useState(currentCityStorage || 'london');

  useEffect(() => {
    localStorage.setItem('cityName', cityName)
  }, [cityName])

  const [savedCities, setSavedCities] = useState(savedCitiesStorage || []);

  useEffect(() => {
    const savedCitiesJSON = JSON.stringify(savedCities)
    localStorage.setItem('savedCities', savedCitiesJSON)
  },[savedCities])

  async function getCityForm(value) {
    const serverUrl = 'http://api.openweathermap.org/data/2.5/weather';
    const apiKey = '876cf39fa6cd1bdda202ce044015d0e5';
    const cityName = value
    const url =  `${serverUrl}?q=${cityName}&appid=${apiKey}&units=metric`;

    const response = await fetch(url)
    
    response.ok ? setCityName(value) : setCityName('');
  }

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
  if (cityName) {
    return (
      <div className='container'>
        <div>
          <SearchForm 
          onFormSubmit={getCityForm} />
        </div>
        <CityContext.Provider value={cityName}>
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
          </CityContext.Provider>
      </div>
    )
  } else {
    return (
      <div className='container'>
        <div>
          <SearchForm 
          onFormSubmit={getCityForm} />
        </div>
        <CityContext.Provider value={cityName}>
          <div className='main__container'>
            <div className='box'>
              <p>ВВЕДИТЕ СУЩЕСТВУЮЩИЙ ГОРОД</p>
            </div>
            <div className='box'>
              <SavedCities 
              onItemClick={showSavedCity} 
              currentCity={cityName} 
              list={savedCities} />
            </div>
          </div>
          </CityContext.Provider>
      </div>
    )
  }
}


root.render(<App />)