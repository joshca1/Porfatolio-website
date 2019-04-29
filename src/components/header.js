import React from 'react'
import './header.scss'
import ActiveBurger from '../burger-context.js'

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
                <link to="Porfafolio"> Porfafolio </link>
                <span />
              </li>
              <li>
                <a href="#1"> About </a>
                <span />
              </li>
              <li>
                <a href="#1"> Contact </a>
                <span />
              </li>
            </ul>
          </div>
        </header>
      )}
    </ActiveBurger.Consumer>
  )
}
export default Header
