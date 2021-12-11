import { v4 as uuidv4 } from 'uuid'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { useState } from 'react'
import Header from './components/Header'
import { FeedbackProvider } from './context/FeedbackContext'

import FeedbackList from './components/FeedbackList'
import FeedbackData from './data/FeedbackData'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'

import AboutPage from './pages/AboutPage'

const App = () => {
  const [feedback, setFeedback] = useState(FeedbackData)
  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    setFeedback([newFeedback, ...feedback])
  }

  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className="container">
          <Route path="/">
            <FeedbackForm handleAdd={addFeedback} />
            <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
            <FeedbackStats feedback={feedback} />
          </Route>
          <Route path="/about" component={AboutPage} />
        </div>
      </Router>
    </FeedbackProvider>
  )
}

export default App
