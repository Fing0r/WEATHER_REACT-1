import { useEffect, useState } from "react";
import { TabNow, TabSwitcher } from "./TabNow";
import { TabDetails } from "./TabDetails";
import { TabForecast } from "./TabForecast";
import { CityContext } from "./context";

export const nowTab = 'Now';
export const detailsTab = 'Details';
export const forecastTab = 'Forecast';

export const nowTabActive = {'Now': true};
export const detailsTabActive = {'Details': true};
export const forecastTabActive = {'Forecast': true};

export function TabContainer(props) {
const { onLikeClick } = props
const [ activeTab, setActiveTab ] = useState(nowTabActive)

    return (
        <>
        <CityContext.Consumer>
            {(currentCity) => (
            <>
                <TabNow 
                currentCity={currentCity} 
                onLikeClick={onLikeClick} 
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
}