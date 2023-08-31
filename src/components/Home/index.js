// Write your code here
// Write your code here
import ThemeContext from '../../context/ThemeContext'

import Navbar from '../Navbar'

import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const homeClsName = isDarkTheme ? 'bg-dark' : 'bg-light'
      const homeImageURL = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'

      const homeTextClsName = isDarkTheme ? 'text-light' : 'text-dark'

      return (
        <div className={`app-container ${homeClsName}`}>
          <Navbar />
          <div className="page-container">
            <div className="container">
              <img className="image" src={homeImageURL} alt="home" />
              <h1 className={`heading ${homeTextClsName}`}>Home</h1>
            </div>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
