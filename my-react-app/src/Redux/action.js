import { createAction } from "@reduxjs/toolkit";
import { GET_URL } from "../js/url";

const TOGGLE_CITY = "TOGGLE_CITY";
const SET_CITY = "SET_CITY";
const GET_STATS = "GET_STATS";
const REQUEST_WEATHER = "REQUEST_WEATHER";
const GET_CURRENT = "GET_CURRENT";
const GET_FORECAST = "GET_FORECAST";

const setCurrentCity = createAction(SET_CITY);
const toggleCity = createAction(TOGGLE_CITY);
const requestWeather = createAction(REQUEST_WEATHER);
const getStats = createAction(GET_STATS);

function getWeather(city, json) {
  return { type: GET_CURRENT, city, weather: json };
}

function getForecast(city, json) {
  return { type: GET_FORECAST, city, weather: json };
}

export function fetchWeather(city) {
  return async (dispatch) => {
    const url = GET_URL.MAIN(city);

    const response = await fetch(url);
    const json = await response.json();
    dispatch(getWeather(city, json));
  };
}

export function fetchForecast(city) {
  return async (dispatch) => {
    const url = GET_URL.FORECAST(city);

    const response = await fetch(url);
    const json = await response.json();
    dispatch(getForecast(city, json));
  };
}

export {
  TOGGLE_CITY,
  SET_CITY,
  GET_STATS,
  GET_FORECAST,
  REQUEST_WEATHER,
  GET_CURRENT,
  getWeather,
  getStats,
  requestWeather,
  setCurrentCity,
  toggleCity,
};
