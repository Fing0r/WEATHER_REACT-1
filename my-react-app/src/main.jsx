import React from 'react'
import ReactDOM from 'react-dom/client'
import store from './js/store'
import { Provider } from 'react-redux'
import { App } from './App'
import { HelpPage } from './Router/HelpPage'
import { StatsPage } from './Router/StatsPage'
import { 
  BrowserRouter,
  Route,
  Routes
 } from 'react-router-dom'


const root = ReactDOM.createRoot(document.getElementById('root'))



root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='help' element={<HelpPage />} />
        <Route path='stats' element={<StatsPage />} />
      </Routes>
    </BrowserRouter>
  </Provider>
)  