import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

// component
import Navbar from './components/Navbar'

function App() {
  return (
    <Router>
      <div className="flex flex-col justify-between h-screen">
        <Navbar />
        <main>Content</main>
      </div>
    </Router>
  )
}

export default App
