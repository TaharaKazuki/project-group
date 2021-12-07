import { useState } from 'react'
import Header from './components/Header'

const App = () => {
  const [feedback, setFeedback] = useState('')

  return (
    <>
      <Header />
      <div className="container">
        <h1>My App</h1>
      </div>
    </>
  )
}

export default App
