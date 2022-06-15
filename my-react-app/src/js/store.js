import { configureStore } from "@reduxjs/toolkit";
import weatherApp from "../Redux/reduce";

const store = configureStore({
    reducer: weatherApp,
})

export default store;