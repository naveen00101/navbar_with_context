// Write your code here
import ThemeContext from '../../context/ThemeContext'

import Navbar from '../Navbar'

import './index.css'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const aboutClsName = isDarkTheme ? 'bg-dark' : 'bg-light'
      const aboutImageURL = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'

      const aboutTextClsName = isDarkTheme ? 'text-light' : 'text-dark'

      return (
        <div className={`app-container ${aboutClsName}`}>
          <Navbar />
          <div className="page-container">
            <div className="container">
              <img className="image" src={aboutImageURL} alt="about" />
              <h1 className={`heading ${aboutTextClsName}`}>About</h1>
            </div>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
