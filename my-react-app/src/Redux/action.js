const TOGGLE_CITY = 'TOGGLE_CITY';
const SET_CITY = 'SET_CITY';
const GET_STATS = 'GET_STATS'


function setCurrentCity(city) {
    return {type: SET_CITY, city}
}

function toggleCity(city) {
    return {type: TOGGLE_CITY, city}
}

function getStats(city) {
    return {type: GET_STATS, city}
}

export {TOGGLE_CITY, SET_CITY, GET_STATS, getStats, setCurrentCity, toggleCity}