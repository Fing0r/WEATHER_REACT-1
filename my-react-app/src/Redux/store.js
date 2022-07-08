import { configureStore } from "@reduxjs/toolkit";
import { fetchWeather } from "../Redux/action";
import weatherApp from "../Redux/reduce";

const store = configureStore({
  reducer: weatherApp,
});

store.dispatch(fetchWeather("labinsk"));

export default store;
