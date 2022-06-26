import './App.css'
import Contact from './Component/Contact/Contact'
import Experience from './Component/Experience/Experience'
import Footer from './Component/Footer/Footer'
import Intro from './Component/Intro/Intro'
import Navbar from './Component/Navbar/Navbar.jsx'
import Projects from './Component/Projects/Projects'
import Services from './Component/services/Services'

function App() {
  return (
    <div className="App">
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
