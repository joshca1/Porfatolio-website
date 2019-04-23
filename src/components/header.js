import React from 'react'
import './header.scss'
import { ActiveBurger } from '../context.js'

const Header = props => {
  return (
    <ActiveBurger.Consumer>
      {({ burger, setBurger }) => (
        <header
          className={
            'header ' + (burger.isActive ? 'burger-active' : 'burger-inactive')
          }
        >
          <div
            className="burger-icon"
            onClick={() => {
              setBurger({ isActive: !burger.isActive })
            }}
          >
            <div />
          </div>
          <div className="nav-links">
            <ul>
              <li>
                <a href="#1"> Home </a>
              </li>
              <li>
                <a href="#1"> Porfafolio </a>
              </li>
              <li>
                <a href="#1"> About </a>
              </li>
              <li>
                <a href="#1"> Contact </a>
              </li>
            </ul>
          </div>
        </header>
      )}
    </ActiveBurger.Consumer>
  )
}
export default Header
