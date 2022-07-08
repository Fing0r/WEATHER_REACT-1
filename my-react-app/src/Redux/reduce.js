import {
  TOGGLE_CITY,
  SET_CITY,
  GET_STATS,
  REQUEST_WEATHER,
  GET_CURRENT,
  GET_FORECAST,
} from "./action";
import { combineReducers } from "redux";
import STORAGE from "../js/storage";
import { createReducer } from "@reduxjs/toolkit";

const defaultCity = "london";
const defaultSavedCities = STORAGE.getsavedCities() ?? [];
const defaultCurrentCity = STORAGE.getCurrentCity() ?? defaultCity;

const savedCities = createReducer(defaultSavedCities, (builder) => {
  builder.addCase(TOGGLE_CITY, (state, action) => {
    const currentCity = {
      name: action.payload,
      key: Date.now(),
    };
    const isDublicate = state.find((item) => item.name === action.payload);

    if (isDublicate) {
      const newState = state.filter((item) => item.name !== action.payload);
      return newState;
    } else {
      const newState = [...state, currentCity];
      return newState;
    }
  });
});

const currentCity = createReducer(defaultCurrentCity, (builder) => {
  builder.addCase(SET_CITY, (state, action) => {
    return (state = action.payload);
  });
});

const weather = createReducer({}, (builder) => {
  builder
    .addCase(REQUEST_WEATHER, (state, action) => {
      state.isFetching = true;
    })
    .addCase(GET_CURRENT, (state, action) => {
      state.isFetching = false;
      state.info = action.weather;
    })
    .addCase(GET_FORECAST, (state, action) => {
      state.isFetching = false;
      state.forecast = action.weather;
    });
});

function userStats(state = {}, action) {
  const currentCity = action.payload;
  switch (action.type) {
    case GET_STATS:
      const stateArr = Object.keys(state);
      const newState = { ...state };
      if (stateArr.includes(currentCity)) {
        newState[currentCity] += 1;
      } else {
        newState[currentCity] = 1;
      }
      return newState;
    default:
      return state;
  }
}

const weatherApp = combineReducers({
  currentCity,
  savedCities,
  userStats,
  weather,
});

export default weatherApp;
