import React, { useState } from 'react'
import Header from './components/header'
import { Route } from 'react-router-dom'
import Portafolio from './components/pages/portafolio'
import './App.css'
import ActiveBurger from './burger-context.js'
const App = () => {
  const [burger, setBurger] = useState({ isActive: false })
  return (
    <ActiveBurger.Provider value={{ burger, setBurger }}>
      <div className="App">
        <Header />
        <div className="contenido">
          <Route path="/portafolio" component={Portafolio} />
          <div className="testeo" />
          <div className="testeo" />
        </div>
      </div>
    </ActiveBurger.Provider>
  )
}

export default App
