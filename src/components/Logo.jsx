import React from 'react'
import logo from '../assets/SkullBattle.png'
function Logo({ width = '', height = '' }) {
  return (
    <img src={logo} alt="Logo" style={{ width, height }} />
  )
}

export default Logo