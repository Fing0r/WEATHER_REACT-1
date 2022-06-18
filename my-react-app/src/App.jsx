import { SavedCities } from './SavedCities/SavedCities';
import { TabContainer } from './Tabs/TabContainer';
import { SearchForm } from './Header/SearchForm';
import { CityContext } from './js/context';
import { useSelector } from 'react-redux/es/exports';
import { NavMenu } from './Router/NavMenu';
import './index.css';




export function App() {
    const currentCity = useSelector((state) => state.currentCity);
  
      return (
        <div className='container'>
          <NavMenu />
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