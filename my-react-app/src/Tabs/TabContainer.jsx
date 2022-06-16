import { useState } from "react";
import { TabNow, TabSwitcher } from "./TabNow";
import { TabDetails } from "./TabDetails";
import { TabForecast } from "./TabForecast";
import { CityContext } from "../js/context";
import { useSelector } from 'react-redux'


export const nowTab = 'Now';
export const detailsTab = 'Details';
export const forecastTab = 'Forecast';

export const nowTabActive = {'Now': true};
export const detailsTabActive = {'Details': true};
export const forecastTabActive = {'Forecast': true};

export function TabContainer() {
const [ activeTab, setActiveTab ] = useState(nowTabActive)
const currentCity = useSelector((state) => state.currentCity);

if (currentCity) {
    return (
        <>
        <CityContext.Consumer>
            {(currentCity) => (
            <>
                <TabNow 
                currentCity={currentCity}  
                isActive={activeTab[nowTab]} />
                <TabDetails 
                currentCity={currentCity} 
                isActive={activeTab[detailsTab]} />
                <TabForecast 
                currentCity={currentCity} 
                isActive={activeTab[forecastTab]} />
            </>
            )}
        </CityContext.Consumer>
            <TabSwitcher 
            onSwitch={(value) => setActiveTab(value)} />
        </>
    )
} else {
    return (
        <>
            <p>ВВЕДИТЕ СУЩЕСТВУЮЩИЙ ГОРОД</p>
            <TabSwitcher 
            onSwitch={(value) => setActiveTab(value)} />
        </>
    )
}
}