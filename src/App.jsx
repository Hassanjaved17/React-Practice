// import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useContext } from 'react'
import ThemeContext from './context/ThemeContext'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import Footer from './components/Footer'


function App() {
  const { theme } = useContext(ThemeContext)

  return (
    <div className="app">
      <BrowserRouter>
       <div className={theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}>
      <Navbar />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      </div>
      </BrowserRouter>
    </div>
  )
}

export default App
