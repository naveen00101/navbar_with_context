// Write your code here
import Navbar from '../Navbar'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const notFoundBgClsName = isDarkTheme
        ? 'not-found-bg-dark'
        : 'not-found-bg-light'

      const notFoundHeadingTextClsName = isDarkTheme
        ? 'not-found-heading-text-light'
        : 'not-found-heading-text-dark'

      const notFoundContentTextClsName = isDarkTheme
        ? `not-found-content-text-light`
        : `not-found-content-text-dark`

      return (
        <div className={`not-found-app-container ${notFoundBgClsName}`}>
          <Navbar />
          <div className="not-found-responsive-container">
            <div className="not-found-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
                alt="not found"
                className="not-found-img"
              />
              <h1 className={`not-found-heading ${notFoundHeadingTextClsName}`}>
                Lost Your Way ?
              </h1>
              <p className={`not-found-content ${notFoundContentTextClsName}`}>
                We cannot seem to find the page you are looking for.
              </p>
            </div>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
