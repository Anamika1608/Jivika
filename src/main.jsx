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

const router = createBrowserRouter(
  createRoutesFromElements (
    <Route path='/' element={<App />}>
      <Route path="" element={<HomePage />} />
      <Route path="explore-plants" element={<Explore />} />
      
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode> 
      <RouterProvider router={router} />
  </React.StrictMode>,
)
