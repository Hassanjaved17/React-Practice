import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'


function App() {
  return (
    <div className="app">
      <BrowserRouter>
      <Navbar />
      <Routes>
          <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
