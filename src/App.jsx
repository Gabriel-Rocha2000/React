import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'

//PAGES
import Home from './pages/home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

//UTTILS
import ScrollToTop from './utils/scrollTop'


function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Projects" element={<Projects />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
      </Routes>

    </Router>
)   
}


export default App
