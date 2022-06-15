import React from 'react'
import ReactDOM from 'react-dom/client'
import { SavedCities } from './SavedCities/SavedCities'
import { TabContainer } from './Tabs/TabContainer'
import { SearchForm } from './Header/SearchForm'
import { CityContext } from './js/context'
import store from './js/store'
import { Provider } from 'react-redux'
import { useSelector } from 'react-redux/es/exports'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))


function App() {
  const currentCity = useSelector((state) => state.currentCity);

    return (
      <div className='container'>
        <div>
          <SearchForm />
        </div>
        <CityContext.Provider value={currentCity}>
          <div className='main__container'>
            <div className='box'>
              <TabContainer />
            </div>
            <div className='box'>
              <SavedCities />
            </div>
          </div>
          </CityContext.Provider>
      </div>
    )

}


root.render(
  <Provider store={store}>
    <App />
  </Provider>
)  