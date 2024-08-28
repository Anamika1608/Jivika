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

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(registration => {
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
      })
      .catch(error => {
        console.error('ServiceWorker registration failed: ', error);
      });
  });
}

import HomePage from './pages/HomePage/HomePage.jsx'
import Explore from './pages/Explore/Explore.jsx';
import List from './components/Tour/List.jsx';
import AR1 from './components/AR/AR1.jsx'
import AR3 from './components/AR/AR3.jsx'
import AR5 from './components/AR/AR5.jsx'
import AR6 from './components/AR/AR6.jsx'
import AR9 from './components/AR/AR9.jsx'

const router = createBrowserRouter(
  createRoutesFromElements (
    <Route path='/' element={<App />}>
      <Route path="" element={<HomePage />} />
      <Route path="explore-plants" element={<Explore />} />
      <Route path="medicinal-plants" element={<List />} />
      <Route path="aloevera" element={<AR1 />} />
      <Route path="tulsi" element={<AR3 />} />
      <Route path="hibiscus" element={<AR6/>} />
      <Route path="random" element={<AR9/>} />
      <Route path="curry-patta" element={<AR5 />} />
      
    </Route>
  ) 
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode> 
      <RouterProvider router={router} />
  </React.StrictMode>,
)
