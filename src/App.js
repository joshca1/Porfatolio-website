import React, { Fragment, useState } from 'react'
import Header from './components/header'
import Content from './components/content'

import './App.css'
import ActiveBurger from './burger-context.js'
const App = () => {
  const [burger, setBurger] = useState({ isActive: false })
  return (
    <Fragment>
      <ActiveBurger.Provider value={{ burger, setBurger }}>
        <Header />
        <Content />
      </ActiveBurger.Provider>
    </Fragment>
  )
}

export default App
