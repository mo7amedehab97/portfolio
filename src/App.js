import './App.css'
import Experience from './Component/Intro/Experience/Experience'
import Intro from './Component/Intro/Intro'
import Navbar from './Component/Navbar/Navbar.jsx'
import Services from './Component/services/Services'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Services />
      <Experience />
    </div>
  )
}

export default App
