import './App.css'
import Experience from './Component/Intro/Experience/Experience'
import Intro from './Component/Intro/Intro'
import Navbar from './Component/Navbar/Navbar.jsx'
import Services from './Component/services/Services'
import Works from './Component/Works/Works'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Services />
      <Experience />
      <Works />
    </div>
  )
}

export default App
