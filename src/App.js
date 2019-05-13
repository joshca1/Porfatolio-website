import React, { useState } from 'react'
import Header from './components/header'
import Content from './components/content'

import './App.css'
import ActiveBurger from './burger-context.js'
const App = () => {
  const [burger, setBurger] = useState({ isActive: false })
  return (
    <ActiveBurger.Provider value={{ burger, setBurger }}>
      <Header />
      <Content />
    </ActiveBurger.Provider>
  )
}

export default App
