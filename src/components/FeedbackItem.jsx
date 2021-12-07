import React from 'react'

const FeedbackItem = ({ item }) => {
  return (
    <div className="card">
      <div className="num-display">{item.rating}</div>
      <div className="num-display">{item.text}</div>
    </div>
  )
}

export default FeedbackItem
