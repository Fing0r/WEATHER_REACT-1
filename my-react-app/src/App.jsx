import { NavMenu } from "./routing/nav-menu";
import { SearchForm } from "./components/header/search-form";
import { TabContainer } from "./components/tabs/tab-container";
import { SavedCities } from "./components/saved-cities/saved-cities";
import { CityContext } from "./js/context";
import { useSelector } from "react-redux/es/exports";
import "./index.css";

export function App() {
  const currentCity = useSelector((state) => state.currentCity);

  return (
    <div className="container">
      <NavMenu />
      <div>
        <SearchForm />
      </div>
      <CityContext.Provider value={currentCity}>
        <div className="main__container">
          <div className="box">
            <TabContainer />
          </div>
          <div className="box">
            <SavedCities />
          </div>
        </div>
      </CityContext.Provider>
    </div>
  );
}
