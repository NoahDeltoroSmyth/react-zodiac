import React from 'react'
import './Main.css'
import { zodiac } from '../../data'
import Zodiac from '../Zodiac/Zodiac'
import background from '../../background.jpeg'

export default function Main() {
  return (
    <main style={{ backgroundImage: `url(${background})` }}>
      {zodiac.map((zodiac) => (
        <Zodiac key={zodiac.name} {...zodiac} />
      ))}
    </main>
  )
}
