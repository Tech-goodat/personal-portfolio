import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import"./styles/App.css"
import Navbar from './Navbar.jsx'
import About_me from './About_me.jsx'
import Contact from './Contact.jsx'
import Services from './Services.jsx'
import Works from './Works.jsx'
import Home from './Home.jsx'
function App() {
  return (
    <Router>
    <div className="app-container">
      <div className='nav-section'>
      <Navbar />
      <img src='public/image.png'></img>
      </div>
    
     <div className='content-section'>
      
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/About_me"  element={<About_me />} />
        <Route path="/Contact"  element={<Contact />} />
        <Route path="/Services"  element={<Services />} />
        <Route path="/Works"  element={<Works />} />
      </Routes>
      </div>
      </div>
    </Router>
   
  )
}

export default App