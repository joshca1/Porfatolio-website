import React from 'react'
import './portafolio.scss'
import project1Preview from '../../images/carro.gif'
import project2Preview from '../../images/second.gif'
const Portafolio = props => {
  const projectStaticImages = [
    'https://websitesetup.org/wp-content/uploads/2018/04/bluehost-landing-page.jpg',
    'https://99designs-start-attachments.imgix.net/alchemy-pictures/2016%2F01%2F29%2F06%2F52%2F16%2F2574220d-7737-4c39-a562-8e153a5d1497%2Fwebsite-hero3.png?auto=format&ch=Width%2CDPR&fm=png&w=824&h=457'
  ]
  const projectGif = [project1Preview, project2Preview]
  const prewviewProjectImages = (event, number) => {
    event.target.src = projectGif[number - 1]
  }
  const restorePortraitImage = (event, number) => {
    event.target.src = projectStaticImages[number - 1]
  }
  return (
    <div className="portafolio" id="portafolio">
      <div className="project-card">
        <div className="project-photo">
          <img
            src="https://websitesetup.org/wp-content/uploads/2018/04/bluehost-landing-page.jpg"
            alt="Project 1"
            onMouseEnter={event => {
              prewviewProjectImages(event, 1)
            }}
            onMouseOut={event => {
              restorePortraitImage(event, 1)
            }}
          />
        </div>
        <div className="project-info">
          <div className="info-header">
            <h1>Ecommerce site</h1>
            <h5>Tecnologies Used:</h5>
            <p>Nuxt | Vue | Vuex | Firebase | Bulma</p>
            <h5>Skills Develop:</h5>
            <p>Handle Async Code (promises, async await) Advanced Js </p>
            <h5>Project Description:</h5>
            <p>
              Implementing Login, register user, recovery password, wizard to
              make a publication, uploading images, set a location, contact
              chat, user favorites publications.
            </p>
          </div>
          <div className="project-links">
            <a href="https://bitbucket.org/joshca1/commerce-app">
              <span>
                <i className="fab fa-github" />
              </span>
              <span>Code</span>
            </a>
            <a href="#4">
              <span className="icon">
                <i className="fas fa-play" />
              </span>
              <span>Live</span>
            </a>
          </div>
        </div>
      </div>
      <div className="project-card">
        <div className="project-photo">
          <img
            src="https://websitesetup.org/wp-content/uploads/2018/04/bluehost-landing-page.jpg"
            alt="Project 2"
            onMouseEnter={event => {
              prewviewProjectImages(event, 2)
            }}
            onMouseOut={event => {
              restorePortraitImage(event, 2)
            }}
          />
        </div>
        <div className="project-info">
          <div className="info-header">
            <h1>Platzi Video</h1>
            <h5>Tecnologies Used:</h5>
            <p>React | Redux | Html5 | Css</p>
            <h5>Skills Develop:</h5>
            <p>Data managment | Grid Flexbox | React components </p>
            <h5>Project Description:</h5>
            <p>
              Website Made for practicing React implements comunication between
              Components, Redux management, responsive layout with css grid
            </p>
          </div>
          <div className="project-links">
            <a href="https://github.com/joshca1/platzi-video">
              <span>
                <i className="fab fa-github" />
              </span>
              <span>Code</span>
            </a>
            <a href="#4">
              <span className="icon">
                <i className="fas fa-play" />
              </span>
              <span>Live</span>
            </a>
          </div>
        </div>
      </div>
      <div className="project-card">
        <div className="project-photo">
          <img
            src="https://websitesetup.org/wp-content/uploads/2018/04/bluehost-landing-page.jpg"
            alt="Project 3"
            onMouseEnter={event => {
              prewviewProjectImages(event, 3)
            }}
            onMouseOut={event => {
              restorePortraitImage(event, 3)
            }}
          />
        </div>
        <div className="project-info">
          <div className="info-header">
            <h1>Portafolio Website</h1>
            <h5>Tecnologies Used:</h5>
            <p>React | Html5 | Css</p>
            <h5>Skills Develop:</h5>
            <p>Advanced css | Grid Flexbox | components </p>
            <h5>Project Description:</h5>
            <p>
              Website created for showcase my personal projects in programing,
              and aditional personal info.
            </p>
          </div>
          <div className="project-links">
            <a href="https://github.com/joshca1/Porfatolio-website">
              <span>
                <i className="fab fa-github" />
              </span>
              <span>Code</span>
            </a>
            <a href="#4">
              <span className="icon">
                <i className="fas fa-play" />
              </span>
              <span>Live</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portafolio
