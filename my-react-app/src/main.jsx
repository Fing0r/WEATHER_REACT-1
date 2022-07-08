import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { HelpPage } from "./routing/help-page";
import { StatsPage } from "./routing/stats-page";
import store from "./redux/store";
import { App } from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="help" element={<HelpPage />} />
        <Route path="stats" element={<StatsPage />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);
