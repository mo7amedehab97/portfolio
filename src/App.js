import React, { useContext } from 'react'
import Contact from './Component/Contact/Contact'
import Experience from './Component/Experience/Experience'
import Footer from './Component/Footer/Footer'
import Intro from './Component/Intro/Intro'
import Navbar from './Component/Navbar/Navbar.jsx'
import Projects from './Component/Projects/Projects'
import Services from './Component/services/Services'
import 'antd/dist/antd.css'
import './App.css'
import { themeContext } from './Context'
function App() {
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode
  return (
    <div
      className="App"
      style={{
        background: darkMode ? '#1d202f' : '',
        color: darkMode ? 'white' : '',
      }}
    >
      <Navbar />
      <Intro />
      <Services />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
