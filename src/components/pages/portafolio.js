import React from 'react'
import './portafolio.scss'
import project1Photo from '../../images/project1/photo1.jpg'
import project1Preview from '../../images/project1/project1preview.gif'

import project2Photo from '../../images/project2/photo1.jpg'
import project2Preview from '../../images/project2/preview.jpg'

import project3Photo from '../../images/project3/photo1.jpg'
import project3Preview from '../../images/project3/preview.jpg'

const Portafolio = props => {
  const projectStaticImages = [project1Photo, project2Photo, project3Photo]
  const projectGif = [project1Preview, project2Preview, project3Preview]
  const prewviewProjectImages = (event, number) => {
    event.target.src = projectGif[number - 1]
  }
  const restorePortraitImage = (event, number) => {
    event.target.src = projectStaticImages[number - 1]
  }
  return (
    <div className="portafolio" id="portafolio">
      <em>Projects</em>
      <hr />
      <div className="project-card">
        <div className="project-photo">
          <img
            src={project1Photo}
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
            <p>Async Code | Workflow | Advanced Js | backend node </p>
            <h5>Project Description:</h5>
            <p className="project-description">
              Website that allows to make publications (products, or services)
              Implementing Login, register user,user profile, recovery password,
              wizard to make a publication, uploading images, set a location for
              the publication (google maps api), contact chat for a specific
              product, user favorites publications, security privileges.
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
            src={project2Photo}
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
            src={project3Photo}
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
            <a href="#about">
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
