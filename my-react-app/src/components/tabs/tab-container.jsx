import { useState } from "react";
import { TabNow, TabSwitcher } from "./tab-now";
import { TabDetails } from "./tab-details";
import { TabForecast } from "./tab-forecast";
import { CityContext } from "../../js/context";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchWeather } from "../../redux/action";

export const nowTab = "Now";
export const detailsTab = "Details";
export const forecastTab = "Forecast";

export const nowTabActive = { Now: true };
export const detailsTabActive = { Details: true };
export const forecastTabActive = { Forecast: true };

export function TabContainer() {
  const [activeTab, setActiveTab] = useState(nowTabActive);
  const currentCity = useSelector((state) => state.currentCity);
  const cityData = useSelector((state) => state.weather.info);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWeather(currentCity));
  }, []);

  if (currentCity) {
    return (
      <>
        <CityContext.Consumer>
          {(currentCity) => (
            <>
              <TabNow
                currentCity={currentCity}
                isActive={activeTab[nowTab]}
                info={cityData}
              />
              <TabDetails
                currentCity={currentCity}
                isActive={activeTab[detailsTab]}
                info={cityData}
              />
              <TabForecast
                currentCity={currentCity}
                isActive={activeTab[forecastTab]}
                info={cityData}
              />
            </>
          )}
        </CityContext.Consumer>
        <TabSwitcher onSwitch={(value) => setActiveTab(value)} />
      </>
    );
  } else {
    return (
      <>
        <p>ВВЕДИТЕ СУЩЕСТВУЮЩИЙ ГОРОД</p>
        <TabSwitcher onSwitch={(value) => setActiveTab(value)} />
      </>
    );
  }
}
