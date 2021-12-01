import React from 'react'

import './Zodiac.css'

export default function Zodiac(props) {
  return (
    <>
      <div className="zodiac">
        <img src={`${process.env.PUBLIC_URL}/zodiac-signs/${props.name}.png`} />
        <span className="name">{props.name}</span>
        <span>{props.dates}</span>
      </div>
    </>
  )
}
