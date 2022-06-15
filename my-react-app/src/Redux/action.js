const TOGGLE_CITY = 'TOGGLE_CITY';
const SET_CITY = 'SET_CITY';


function setCurrentCity(city) {
    return {type: SET_CITY, city}
}

function toggleCity(city) {
    return {type: TOGGLE_CITY, city}
}

export {TOGGLE_CITY, SET_CITY, setCurrentCity, toggleCity}