import React from 'react'
import './Main.css'
import { zodiac } from '../../data'
import Zodiac from '../Zodiac/Zodiac'
import background from '../../background.png'

export default function Main() {
  return (
    <main style={{ backgroundImage: `url(${background})` }}>
      {zodiac.map((zodiac) => (
        <Zodiac key={zodiac.type} {...zodiac} />
      ))}
    </main>
  )
}