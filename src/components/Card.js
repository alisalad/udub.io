import React from 'react'
import './Card.css'

const Card = props => (
  <div className="Card">
    <img src={props.image} />
    <h3>{props.title}</h3>
    <p>{props.text}</p>
    <p>{props.description}</p>

  </div>
)

export default Card