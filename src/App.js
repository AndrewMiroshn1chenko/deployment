import React from 'react';
import {BrowserRouter, Link, Route, Switch, Redirect} from 'react-router-dom'

import "./styles/app.css"
import Navbar from './Components/UI/Navbar/Navbar';
import AppRouter from './AppRouter'
function App() {
  return(
    <BrowserRouter>
      <Navbar/>
      <AppRouter/>
    </BrowserRouter>
          
  )
}

export default App;
