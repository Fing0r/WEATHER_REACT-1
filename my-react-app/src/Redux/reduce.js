import {TOGGLE_CITY, SET_CITY, GET_STATS} from './action'
import { combineReducers } from 'redux';
import STORAGE from '../js/storage';


const defaultCity = 'london';
const defaultSavedCities = STORAGE.getsavedCities() ?? [];
const defaultCurrentCity = STORAGE.getCurrentCity() ?? defaultCity;

function savedCities(state = defaultSavedCities, action) {
    switch (action.type) {
        case TOGGLE_CITY:
            const currentCity = {
                name: action.city,
                key: Date.now()
            };
            const isDublicate = state.find(item => item.name === action.city);
          
            if(isDublicate) {
                const newState = state.filter(item => item.name !== action.city);
                return newState;
            } else {
                const newState = [...state, currentCity];
                return newState;
            }
        default:
            return state;
    }
}

function currentCity(state = defaultCurrentCity, action) {
    switch (action.type) {
        case SET_CITY:
            return action.city
        default:
            return state;
    }
}

function userStats(state = {}, action) {
    const currentCity = action.city;
    switch(action.type) {
        case GET_STATS:
            const stateArr = Object.keys(state);
            const newState = {...state};
            if(stateArr.includes(currentCity)) {
                newState[currentCity] += 1;
            } else {
                newState[currentCity] = 1;
            }
            return newState
        default:
            return state;
    }
}

const weatherApp = combineReducers({
    currentCity,
    savedCities,
    userStats
})

export default weatherApp