import React from 'react'

import './Zodiac.css'

export default function Zodiac(props) {
  const signs = `zodiac ${props.name} ${props.dates}`

  return (
    <>
      <div className={signs}>
        <img src={`${process.env.PUBLIC_URL}/zodiac-signs/${props.name}.png`} />
        <span className="name">{props.name}</span>
        <span>{props.dates}</span>
      </div>
    </>
  )
}
