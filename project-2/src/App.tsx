import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// component
import Navbar from './components/Navbar'
import Footer from './components/layout/Footer'

function App() {
  return (
    <Router>
      <div className="flex flex-col justify-between h-screen">
        <Navbar />
        <main>Content</main>

        <Footer />
      </div>
    </Router>
  )
}

export default App
