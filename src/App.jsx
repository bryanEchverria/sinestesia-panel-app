import { useState } from 'react'
import { RouterProvider } from "react-router-dom";
import {router} from './router/index.jsx';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import MainNavBar from './components/mainNavbar.jsx';
function App() {

  return (
    
    <div className="App">
  <MainNavBar/>
   <RouterProvider router={router} />

    </div>
  ) 
}

export default App
