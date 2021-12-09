import React, { useState } from 'react'

const RatingSelect = ({ select }) => {
  const [selected, setSelected] = useState(10)

  const handleChange = (e) => {
    setSelected(+e.target.value)
    select(+e.currentTarget.value)
  }

  const ratingArray = [...Array(10)].map((_, i) => {
    return {
      type: 'radio',
      id: `num${++i}`,
      name: 'rating',
      value: `${i}`,
      handler: (e) => handleChange(e),
    }
  })

  return (
    <ul className="rating">
      {ratingArray.map(({ type, id, name, value, handler }, index) => (
        <li key={index}>
          <input
            type={type}
            id={id}
            name={name}
            value={value}
            onChange={handler}
            checked={selected === +value}
          />
          <label htmlFor={id}>{value}</label>
        </li>
      ))}
    </ul>
  )
}

export default RatingSelect
