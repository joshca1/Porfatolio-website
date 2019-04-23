import React, { useState } from 'react'
import Header from './components/header'
import './App.css'
import { ActiveBurger } from './context.js'
const App = () => {
  const [burger, setBurger] = useState({ isActive: false })
  return (
    <ActiveBurger.Provider value={{ burger, setBurger }}>
      <div className="App">
        <Header />
        <div className="contenido">hello : {burger.isActive.toString()}</div>
      </div>
    </ActiveBurger.Provider>
  )
}

export default App
