import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,

} from "react-router-dom";

import HomePage from './pages/HomePage/HomePage.jsx'
import Explore from './pages/Explore/Explore.jsx';
import List from './components/Tour/List.jsx';
import AR1 from './components/AR/AR1.jsx'
import AR2 from './components/AR/AR2.jsx'
import AR3 from './components/AR/AR3.jsx'
import AR4 from './components/AR/AR4.jsx'
import AR5 from './components/AR/AR5.jsx'

const router = createBrowserRouter(
  createRoutesFromElements (
    <Route path='/' element={<App />}>
      <Route path="" element={<HomePage />} />
      <Route path="explore-plants" element={<Explore />} />
      <Route path="medicinal-plants" element={<List />} />
      <Route path="neem" element={<AR1 />} />
      <Route path="hibiscus" element={<AR2 />} />
      <Route path="aloevera" element={<AR3 />} />
      <Route path="tulsi" element={<AR4 />} />
      <Route path="lavender" element={<AR5 />} />
      
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode> 
      <RouterProvider router={router} />
  </React.StrictMode>,
)
