import React from 'react'
import Portafolio from './pages/portafolio'
import About from './pages/about'
import Contact from './pages/contact'
const Content = props => {
  return (
    <div className="content">
      <About />
      <Portafolio />
      <Contact />
    </div>
  )
}

export default Content
